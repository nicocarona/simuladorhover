---
name: AeroTactical Glass HUD
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#dbffdc'
  on-tertiary: '#003917'
  tertiary-container: '#44f784'
  on-tertiary-container: '#006e32'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#64ff92'
  tertiary-fixed-dim: '#23e373'
  on-tertiary-fixed: '#00210b'
  on-tertiary-fixed-variant: '#005224'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-lg:
    fontFamily: spaceGrotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: spaceGrotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: spaceGrotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: spaceGrotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: spaceGrotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.04em
  headline-sm:
    fontFamily: spaceGrotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: spaceGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-md:
    fontFamily: spaceGrotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: spaceGrotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-lg:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: jetbrainsMono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
  telemetry-readout:
    fontFamily: jetbrainsMono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.05em
spacing:
  space-xxs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  grid-gutter: 1rem
  grid-margin-desktop: 1.5rem
  grid-margin-mobile: 0.75rem
---

## Brand & Style

The design system embodies the precision, high-urgency legibility, and technical mastery of modern aerospace head-up displays (HUD) and tactical flight management systems. Designed for aerospace operators, simulator pilots, mission command controllers, and defense-grade data interfaces, the experience feels authoritative, mission-critical, and immaculately calibrated. 

The aesthetic synthesizes **Technical Glassmorphism** with **High-Contrast Instrument Vector Graphics**. High-density information layers rest over night-sky deep carbon matrices. Visual elements leverage subtle optical grid lines, targeting reticles, radar sweep rings, vector crosshairs, and digital readout callouts. Every pixel delivers maximum contrast and zero cognitive latency under adverse visual conditions, balancing retro-modern military avionics with next-generation orbital instrumentation.

## Colors

The palette operates in a calibrated low-light cockpit environment to preserve night-vision adaptation while ensuring instantaneous fault and vector recognition:

- **Surface Neutral Matrix (`#0B0F17`)**: Base void slate, evoking cockpit canopy night skies. Surface layers shift into `#131B2A` (flight computer panel surface) and `#1B2538` (elevated telemetry deck).
- **Tactical Cyan Primary (`#00F0FF`)**: Vector HUD tracks, active boresights, primary flight director bars, and navigational paths. Emits an ultra-focused luminescent footprint.
- **Aviation Amber Secondary (`#FFB800`)**: Master cautions, advisory state monitors, transponder locks, and pitch-ladder references.
- **Avionics Emerald Tertiary (`#38EF7D`)**: Nominal sub-systems, verified engine telemetry, safe radar sweeps, and active comms channels.
- **Critical Red Accent (`#FF4B4B`)**: Master warnings, stalls, missile/terrain collision alerts, and hard boundaries.
- **Text & Reticle Hierarchy**: Primary text utilizes high-spec `#E6F4FE` (HUD frost white), muted telemetry uses `#758BA8`, and passive grid lines lock to `#1F2E45` at 40–60% opacity.

## Typography

Typography prioritizes rapid-scan optical recognition and technical fidelity. 

- **Display & Headlines (`Space Grotesk`)**: Provides an authoritative, technical aerospace presence with geometric terminals and structural posture. Headings utilize upper-case formatting for operational commands, sector identification, and waypoint designations.
- **Labels & Telemetry Data (`JetBrains Mono`)**: Monospaced tabular figures ensure flight numbers, coordinates (LAT/LONG), velocity vectors (KTS/MACH), and altitude measures (ALT MSL) never jitter or cause optical shift during continuous real-time refresh.
- **Casing & Kerning**: All instrument readouts, tactical pill indicators, and sub-system labels enforce wide letter-spacing (`0.08em` to `0.12em`) and full uppercase styling to simulate backlit avionics displays.

## Layout & Spacing

The layout model implements a military-grade 12-column fluid tactical grid built upon a tight 4px baseline sub-rhythm.

- **Grid Alignment**: Telemetry panels snap to precise structural module boundaries. Modules sit edge-to-edge or with fixed 16px (`1rem`) gutters to preserve panel modularity identical to cockpit multifunction displays (MFDs).
- **Responsive Adaptation**:
  - **Desktop / Cockpit Display (1200px+)**: Multi-pane layout. Centered tactical attitude/radar ring (span 6), dual peripheral flight telemetry racks (span 3 each). Corner ticks and framing brackets clamp the outer boundary.
  - **Tablet / Co-Pilot Deck (768px - 1199px)**: 8-column layout. Radar collapses to upper viewport; sub-system matrices switch to 4-column side-by-side modules.
  - **Mobile / Handheld Field Unit (< 768px)**: 4-column stack. Reticles convert into simplified top-mounted digital compass tapes and vertical altitude/airspeed ladders. Critical alerts override bottom docking stations.
- **Safe Margins**: Hard-coded 12px HUD corner margins protect vector scopes from clipping against physical viewport bezels.

## Elevation & Depth

Visual hierarchy is maintained through tactical layering, illuminated edges, and glassmorphic depth rather than organic blurred drop shadows:

- **Level 0 (Background Canopy)**: `#0B0F17` base canvas overlaid with a micro-grid cross-pattern (`rgba(0, 240, 255, 0.03)` at 32px intervals).
- **Level 1 (Telemetry Glass Decks)**: Glassmorphic cards constructed with `#131B2A` at 75% opacity, backdrop-filter blur of `12px`, and a continuous 1px ghost border colored `#1F2E45` (or `rgba(0, 240, 255, 0.15)` when online).
- **Level 2 (Active Target Frames & Modals)**: Fill `#1B2538` at 90% opacity, crisp 1px border colored with `#00F0FF`, accompanied by a localized neon luminescence (`box-shadow: 0 0 15px rgba(0, 240, 255, 0.25)`).
- **Level 3 (Alert Popups & Intercept Vectors)**: Solid `#131B2A` with flashing amber (`#FFB800`) or red (`#FF4B4B`) 1.5px borders and ambient neon radiance (`box-shadow: 0 0 24px rgba(255, 75, 75, 0.35)`).

## Shapes

The design system deploys a strictly sharp, angular profile (`roundedness: 0`). 

- **Geometry**: Sharp 0px corners convey physical ruggedness, milled aluminum hardware, and digital avionics CRT/LCD panels.
- **Chamfers & Notches**: Complex interactive containers and cards frequently feature 45-degree chamfered cut corners (4px to 8px corner-cuts) using CSS `clip-path`, accentuating tactical precision.
- **Circular Instruments**: Circular radar sectors, artificial horizons, and heading roses operate as exact, un-aliased circular vector geometries embedded within rectilinear instrument housings.

## Components

### Tactical Action Buttons
- **Primary / Engage**: High-intensity cyan fill (`#00F0FF`) with jet-black typography (`#0B0F17`, bold uppercase JetBrains Mono). Corner tick notches. Hover triggers an amplified outer cyan glare.
- **Secondary / Arming**: Transparent fill, 1px cyan outline (`#00F0FF`), text `#00F0FF`. Active state fills to `rgba(0, 240, 255, 0.12)`.
- **Caution / Warning Buttons**: Amber or Red border with matching glowing monospaced labels and corner brackets.

### Tactical Badges & Pill Readouts
- Monospaced, uppercase telemetry pills with low-opacity tinted backgrounds (`rgba(0, 240, 255, 0.1)`), 1px solid perimeter borders, and a leading 6px pulsing vector dot indicator (e.g., `[● IFF: FRIENDLY]`, `[▲ MACH 1.42]`).

### Input Fields & Selectors
- Dark slate fill (`#0B0F17`) framed by a recessed 1px border (`#1F2E45`). Focus switches the border instantly to `#00F0FF` with a technical bracket cursor. Readouts show real-time variable locks in neon yellow or cyan.

### Checkboxes & Toggle Radios
- Boxy, technical selectors with sharp 0px corners. Checked states display crosshair vector reticles (`+` or diagonal flight bars) illuminated in cyan or avionics emerald.

### Flight Cards & Telemetry Pods
- Translucent night-sky slate surfaces (`#131B2A` at 80% opacity) bounded by 1px ghost borders with corner crop-marks (L-shaped tick marks). Header bars contain monospaced sector IDs (e.g., `SYS_NAV // 01`) separated by razor-thin technical divider lines.

### Specialized Flight HUD Components
- **Heading Tape & Pitch Ladder**: Fixed scale with moving central boresight crosshair, dynamic degree tick marks, and optical horizon lines.
- **Radar Sweep Circle**: Concentric distance rings (10NM, 20NM, 40NM) with rotating phosphor sweep gradients and blip vectors.
- **Barometric & Airspeed Drums**: Vertical tape readouts with monospaced rolling numbers and amber limiter bugs.