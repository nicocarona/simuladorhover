/* ============================================================================
 * AeroHoverEngine — Motor físico del Simulador Táctico AeroHover
 * Prefectura Aérea de Carabineros de Chile
 *
 * Integración a paso fijo de 100 Hz (dt = 0.01 s) mediante acumulador, de modo
 * que la física es determinista e independiente de la tasa de refresco de la
 * pantalla (60/90/120 Hz).
 *
 * Captura MEMS: DeviceOrientationEvent (beta/gamma) como entrada de cíclico.
 * Requiere contexto seguro (HTTPS) en iOS Safari y Android Chrome.
 * ==========================================================================*/
(function (global) {
  'use strict';

  var DT = 0.01;           // paso fijo: 100 Hz
  var MAX_STEPS = 12;      // tope de sub-pasos por frame (evita espiral de muerte)

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function AeroHoverEngine() {
    this.active = false;
    this.mode = 'hover';

    // Entrada MEMS cruda (grados)
    this.rawBeta = 0;
    this.rawGamma = 0;
    this.zeroBeta = 0;
    this.zeroGamma = 0;

    // Actitud filtrada (grados)
    this.pitch = 0;
    this.roll = 0;

    // Estado traslacional de la aeronave (px en el radar)
    this.posX = 0; this.posY = 0;
    this.velX = 0; this.velY = 0;

    // Métricas de misión
    this.corrections = 0;
    this.stability = 100;
    this._lastPitch = 0;
    this._lastRoll = 0;
    this._signPitch = 0;
    this._signRoll = 0;

    // Carga pendular (hoist / bambi): ángulo del cable en radianes
    this.cableX = 0; this.cableY = 0;
    this.cableVX = 0; this.cableVY = 0;

    // Chapoteo del Bambi Bucket
    this.sloshPhase = 0;
    this.sloshAmplitude = 0;
    this.pioRisk = 0;

    this._accumulator = 0;
    this._lastTime = 0;
    this._bound = false;

    // Constantes de modelo
    this.K = {
      cyclicGain: 3.6,      // px/s^2 por grado de cíclico
      drag: 1.9,            // amortiguamiento aerodinámico
      filter: 0.18,         // suavizado exponencial del MEMS
      cableLen: 20.0,       // largo efectivo del cable (m) -> periodo pendular
      cableDamp: 0.55,      // amortiguamiento del péndulo (hoist)
      bambiDamp: 0.22,      // amortiguamiento reducido: 1.200 L de agua
      gravity: 9.81
    };
  }

  /* ---------------------------------------------------------------- sensores */

  AeroHoverEngine.prototype.requestSensorPermission = function (callback) {
    var self = this;
    var done = function (granted) {
      if (granted) self._start();
      if (typeof callback === 'function') callback(granted);
    };

    if (typeof DeviceOrientationEvent === 'undefined') {
      console.warn('[AeroHover] DeviceOrientationEvent no disponible en este dispositivo.');
      done(false);
      return;
    }

    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 13+ : requiere gesto del usuario y HTTPS
      DeviceOrientationEvent.requestPermission()
        .then(function (state) { done(state === 'granted'); })
        .catch(function (err) {
          console.warn('[AeroHover] Permiso MEMS denegado:', err);
          done(false);
        });
    } else {
      done(true);
    }
  };

  AeroHoverEngine.prototype._start = function () {
    if (!this._bound) {
      this._onOrientation = this._onOrientation.bind(this);
      window.addEventListener('deviceorientation', this._onOrientation, true);
      this._bound = true;
    }
    this._lastTime = (global.performance || Date).now();
    this._accumulator = 0;
    this.active = true;
  };

  AeroHoverEngine.prototype.stop = function () {
    this.active = false;
    if (this._bound) {
      window.removeEventListener('deviceorientation', this._onOrientation, true);
      this._bound = false;
    }
  };

  AeroHoverEngine.prototype._onOrientation = function (e) {
    if (e.beta === null || e.gamma === null) return;
    this.rawBeta = e.beta;
    this.rawGamma = e.gamma;
  };

  AeroHoverEngine.prototype.calibrateZero = function () {
    this.zeroBeta = this.rawBeta;
    this.zeroGamma = this.rawGamma;
    this.pitch = 0; this.roll = 0;
    this.posX = 0; this.posY = 0;
    this.velX = 0; this.velY = 0;
    this.cableX = 0; this.cableY = 0;
    this.cableVX = 0; this.cableVY = 0;
    this.sloshAmplitude = 0;
    this.sloshPhase = 0;
    this.corrections = 0;
    this.stability = 100;
  };

  AeroHoverEngine.prototype.setTacticalMode = function (mode) {
    if (mode !== 'hover' && mode !== 'hoist' && mode !== 'bambi') return;
    this.mode = mode;
    this.cableX = 0; this.cableY = 0;
    this.cableVX = 0; this.cableVY = 0;
    this.sloshAmplitude = 0;
    this.corrections = 0;
  };

  /* ----------------------------------------------------------------- física */

  AeroHoverEngine.prototype.updatePhysics = function () {
    if (!this.active) return;

    var now = (global.performance || Date).now();
    var elapsed = (now - this._lastTime) / 1000;
    this._lastTime = now;
    if (elapsed > 0.25) elapsed = 0.25;      // pestaña en segundo plano
    this._accumulator += elapsed;

    var steps = 0;
    while (this._accumulator >= DT && steps < MAX_STEPS) {
      this._step(DT);
      this._accumulator -= DT;
      steps++;
    }
    if (steps === MAX_STEPS) this._accumulator = 0;
  };

  AeroHoverEngine.prototype._step = function (dt) {
    var K = this.K;

    // 1. Actitud: filtro exponencial sobre la lectura MEMS calibrada
    var targetPitch = clamp(this.rawBeta - this.zeroBeta, -45, 45);
    var targetRoll = clamp(this.rawGamma - this.zeroGamma, -45, 45);
    this.pitch += (targetPitch - this.pitch) * K.filter;
    this.roll += (targetRoll - this.roll) * K.filter;

    // 2. Conteo de micro-correcciones: inversión de sentido del cíclico
    this._countCorrection(dt);

    // 3. Traslación: cíclico -> aceleración, con arrastre aerodinámico
    var accX = this.roll * K.cyclicGain - this.velX * K.drag;
    var accY = this.pitch * K.cyclicGain - this.velY * K.drag;
    this.velX += accX * dt;
    this.velY += accY * dt;
    this.posX = clamp(this.posX + this.velX * dt, -150, 150);
    this.posY = clamp(this.posY + this.velY * dt, -150, 150);

    // 4. Estabilidad: desviación radial respecto al punto de estacionario
    var dist = Math.sqrt(this.posX * this.posX + this.posY * this.posY);
    var inst = clamp(100 - dist * 0.72, 0, 100);
    this.stability += (inst - this.stability) * 0.05;

    // 5. Carga pendular
    if (this.mode === 'hoist' || this.mode === 'bambi') {
      this._stepPendulum(dt, accX, accY);
    }

    // 6. Chapoteo y riesgo PIO (Pilot Induced Oscillation)
    if (this.mode === 'bambi') this._stepSlosh(dt);
  };

  AeroHoverEngine.prototype._countCorrection = function () {
    var sp = this.pitch > this._lastPitch ? 1 : (this.pitch < this._lastPitch ? -1 : this._signPitch);
    var sr = this.roll > this._lastRoll ? 1 : (this.roll < this._lastRoll ? -1 : this._signRoll);
    if (sp !== this._signPitch && Math.abs(this.pitch - this._lastPitch) > 0.02) this.corrections++;
    if (sr !== this._signRoll && Math.abs(this.roll - this._lastRoll) > 0.02) this.corrections++;
    this._signPitch = sp; this._signRoll = sr;
    this._lastPitch = this.pitch; this._lastRoll = this.roll;
  };

  // Péndulo forzado por la aceleración del punto de suspensión
  AeroHoverEngine.prototype._stepPendulum = function (dt, accX, accY) {
    var K = this.K;
    var w2 = K.gravity / K.cableLen;                       // omega^2
    var damp = (this.mode === 'bambi') ? K.bambiDamp : K.cableDamp;
    var drive = 0.0022;                                    // acople aeronave->carga

    var aX = -w2 * this.cableX - damp * this.cableVX + accX * drive;
    var aY = -w2 * this.cableY - damp * this.cableVY + accY * drive;
    this.cableVX += aX * dt;
    this.cableVY += aY * dt;
    this.cableX = clamp(this.cableX + this.cableVX * dt, -0.6, 0.6);
    this.cableY = clamp(this.cableY + this.cableVY * dt, -0.6, 0.6);
  };

  AeroHoverEngine.prototype._stepSlosh = function (dt) {
    var swing = Math.sqrt(this.cableX * this.cableX + this.cableY * this.cableY);
    var target = swing * 4.2;
    this.sloshAmplitude += (target - this.sloshAmplitude) * 0.02;
    this.sloshPhase += dt * 4.4;                           // ~0.7 Hz de chapoteo
    if (this.sloshPhase > Math.PI * 2) this.sloshPhase -= Math.PI * 2;

    // PIO: correcciones rápidas del piloto en fase con el chapoteo
    var rate = Math.abs(this.velX) + Math.abs(this.velY);
    var inst = clamp(this.sloshAmplitude * 55 + rate * 0.55, 0, 100);
    this.pioRisk += (inst - this.pioRisk) * 0.03;
  };

  /* ----------------------------------------------------------------- salida */

  AeroHoverEngine.prototype.getState = function () {
    var deflection = Math.sqrt(this.cableX * this.cableX + this.cableY * this.cableY) * this.K.cableLen * 0.11;
    return {
      mode: this.mode,
      pitch: this.pitch.toFixed(1),
      roll: this.roll.toFixed(1),
      corrections: Math.floor(this.corrections / 2),
      stability: Math.round(this.stability),
      posX: this.posX,
      posY: this.posY,
      hoist: {
        cableAngleX: this.cableX,
        cableAngleY: this.cableY,
        rescueeDeflection: deflection,
        inTargetZone: deflection < 0.8
      },
      bambi: {
        sloshPhase: this.sloshPhase,
        sloshAmplitude: this.sloshAmplitude,
        pioRisk: Math.round(this.pioRisk)
      }
    };
  };

  global.AeroHoverEngine = AeroHoverEngine;
})(typeof window !== 'undefined' ? window : this);
