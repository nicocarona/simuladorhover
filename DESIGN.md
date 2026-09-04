---
name: Aeropolicial Tactical System
colors:
  surface: '#0c1510'
  surface-dim: '#0c1510'
  surface-bright: '#323b34'
  surface-container-lowest: '#07100a'
  surface-container-low: '#151e17'
  surface-container: '#19221b'
  surface-container-high: '#232c26'
  surface-container-highest: '#2e3730'
  on-surface: '#dbe5db'
  on-surface-variant: '#c0c9be'
  inverse-surface: '#dbe5db'
  inverse-on-surface: '#29332c'
  outline: '#8a9389'
  outline-variant: '#414941'
  surface-tint: '#98d5a3'
  primary: '#98d5a3'
  on-primary: '#003919'
  primary-container: '#01421e'
  on-primary-container: '#74af80'
  inverse-primary: '#316a41'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#40e18b'
  on-tertiary: '#00391d'
  tertiary-container: '#004222'
  on-tertiary-container: '#00ba6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b3f1be'
  primary-fixed-dim: '#98d5a3'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#16512b'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#63fea5'
  tertiary-fixed-dim: '#40e18b'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#00522c'
  background: '#0c1510'
  on-background: '#dbe5db'
  surface-variant: '#2e3730'
typography:
  headline-xl:
    fontFamily: barlowCondensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: barlowCondensed
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0.04em
  headline-lg:
    fontFamily: barlowCondensed
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: barlowCondensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: barlowCondensed
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.03em
  body-lg:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-telemetry:
    fontFamily: spaceGrotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-badge:
    fontFamily: spaceGrotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.12em
  tabular-readout:
    fontFamily: spaceGrotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin-desktop: 2rem
  grid-margin-mobile: 1rem
  gutter-panel: 1rem
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system embodies the institutional authority, operational discipline, and aeronautical precision of the Carabineros de Chile - Prefectura Aérea. Rooted in nearly a century of tactical aviation service, the visual identity conveys solemnity, unwavering vigilance, and mission-critical readiness.

The aesthetic philosophy fuses **Tactical Cockpit Instrument Design** with **Modern Institutional Authority**:
- **Tactical Utility**: Dark night-vision-friendly surfaces, calibrated for high visual ergonomics in darkened cockpits, command centers, and field operations.
- **Institutional Weight**: Deep Carabineros forest green anchored by antique golden bronze emblems, conveying official state responsibility, chain of command, and heritage.
- **Aeronautical Precision**: Sharp technical layouts, strict grid alignments, monospaced telemetry indicators, high-contrast operational status markers, and crisp data density.

## Colors

The palette is engineered for low photopic stress during flight operations while maintaining immediate legibility under cockpit lighting and night-vision goggle (NVG) compatible scenarios.

### Palette Architecture
- **Primary Institutional Green (`#01421e`)**: Represents deep institutional Carabineros authority, operational validation, and active telemetry with enhanced tactical darkness.
- **Tactical Secondary Gold / Brass (`#c5a059` / `#d4af37`)**: Derived from the historical crossed-carbines insignia, rank badges, and caution-tier operational priority markers.
- **Tertiary Tactical Green (`#26d07c`)**: High-visibility luminescent beacon for live tracking, aircraft transponder status, active radar locks, and immediate operational states.
- **Tactical Base Surfaces**:
  - `surface-dim`: `#070c09` (Cockpit void base)
  - `surface-default`: `#0b120e` (Primary instrument panel backdrop)
  - `surface-container`: `#141f18` (Grouped modular cards and avionics racks)
  - `surface-bright`: `#233328` (Interactive hover states and elevated dials)
- **Institutional Text & Lineage**:
  - `text-high-contrast`: `#f5f9f6` (Police crisp white for crucial flight data and headings)
  - `text-tactical-muted`: `#8a9e91` (Neutral slate green for secondary parameters, axis legends, and inactive systems)
  - `border-tactical`: `rgba(38, 208, 124, 0.14)` (Subtle reticle and structural panel seams)

## Typography

Typography prioritizes glanceable reading speeds, split-second operational clarity, and strict hierarchical rank.

- **Headlines (Barlow Condensed)**: Authoritative, industrial, commanding. All-caps treatments are standard for operational codenames, aircraft tail designations, and sector headings.
- **Body Content (Inter)**: Clean, objective, high-legibility Grotesk that excels at multi-line dispatch manifests, mission logs, and pilot briefings.
- **Telemetry & Labels (Space Grotesk)**: Geometrically calibrated font for telemetry readouts, GPS coordinates, altimeter data, and sensor feeds. Always render telemetry numbers with tabular figures (`font-variant-numeric: tabular-nums`) to prevent jitter in live instrument loops.

## Layout & Spacing

The layout is built upon a **Fluid Modular Grid** inspired by integrated multifunction flight displays (MFDs) and mission command monitors.

### Grid Rules
- **Desktop (>= 1200px)**: 12-column dynamic grid, 2rem margins, 1rem gutters. Sidebars serve as tactical mission docks (3-column fixed or collapsible), center 6-columns allocated to live vector mapping or flight feeds, right 3-columns dedicated to telemetry and mission logs.
- **Tablet (768px - 1199px)**: 8-column layout. Instrument dials and readouts reflow into double-column telemetry bands. Secondary systems shift into tabbed overlays.
- **Mobile (< 768px)**: 4-column layout, 1rem edge margin. Tactical bottom app bar for flight actions; critical alert headers lock to the top viewport edge.

Vertical and horizontal rhythms follow strict 4px / 8px sub-grid pacing to maintain mathematical alignment across HUD overlays and instrument clusters.

## Elevation & Depth

Rather than conventional drop shadows, this design system achieves depth and spatial hierarchy through **Tonal Cockpit Tiering**, **Subtle Phosphor Edges**, and **Low-Contrast Technical Seams**.

- **Level 0 (Hull/Base)**: `#070c09` - Deep dark flight deck floor. No border, non-interactive.
- **Level 1 (Panels & Consoles)**: `#141f18` - Base container layer. Rimmed with a hairline border (`1px solid rgba(255, 255, 255, 0.07)` or `rgba(1, 66, 30, 0.25)`).
- **Level 2 (Active Modules & Cards)**: `#1a2820` - Elevated data modules. Subtle top-light gradient (`linear-gradient(180deg, rgba(35, 51, 40, 0.6) 0%, rgba(20, 31, 24, 0.9) 100%)`) with a fine, diffused night-green bloom (`0 4px 20px rgba(0, 0, 0, 0.6), 0 0 1px rgba(38, 208, 124, 0.3)`).
- **Level 3 (Modal Overlays & Priority Alerts)**: `#1d2c22` - Overlaid targeting reticles, mission overrides, and emergency caution states. Surrounded by an operational perimeter glow (`0 8px 32px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(197, 160, 89, 0.4)` for caution or `#26d07c` for active vectors).

## Shapes

The shape system adopts a **Soft Industrial Geometry (0.25rem / 4px base)**. 

Elements deliberately avoid excessive rounding or bubbly organic forms to preserve the functional, ruggedized physical nature of aviation electronics and military hardware.
- **Base Components (Inputs, Buttons, Cards)**: `0.25rem` (`4px`) roundedness. Delivers clean, machined tolerances.
- **Containers & Glass Panels**: `0.5rem` (`8px`) maximum.
- **Specialized Reticles & Tags**: Clipped 45-degree chamfers or technical notch cutouts on badge corners are permitted for mission status indicators and sector identifier labels.

## Components

### 1. Buttons & Tactical Triggers
- **Primary Mission Button**: Background in deep Carabineros forest green (`#01421e`), high-contrast white text (`#f5f9f6`), 1px structural rim (`rgba(38, 208, 124, 0.4)`). Hover triggers an inner luminescent glow (`box-shadow: 0 0 12px rgba(38, 208, 124, 0.35)`). Active state scales to `0.98`.
- **Secondary Command Button**: Transparent backdrop with 1px golden bronze edge (`#c5a059`), text rendered in bronze. Used for non-destructive authorizations, flight plan validation, and insignia links.
- **Emergency / Intercept Button**: High-visibility safety red/amber backing with strobe pulse animation for tactical emergency transmissions.

### 2. Status Chips & Badges
- **Aeronautical State Chips**: Pill or soft-square tags with uppercase `label-badge` typography.
  - *Active Patrol / Airborne*: Background `rgba(38, 208, 124, 0.12)`, text `#26d07c`, 1px border `#26d07c`. Includes a pulsating 6px green beacon dot.
  - *Institutional / Carabineros Command*: Background `rgba(197, 160, 89, 0.12)`, text `#d4af37`, border `rgba(197, 160, 89, 0.4)`.
  - *Standby / Grounded*: Background `rgba(138, 158, 145, 0.1)`, text `#8a9e91`, border `rgba(138, 158, 145, 0.2)`.

### 3. Lists & Flight Data Logs
- Structured with alternating dark-slate zebra striping (`#111a14` and `#141f18`).
- Cell borders defined by hairline borders (`1px solid rgba(255, 255, 255, 0.04)`).
- Critical columns (Callsign, Altitude, Fuel State, Sector) strictly aligned with monospace tabular formatting.

### 4. Checkboxes & Toggles
- **Checkboxes**: Precision square, 2px stroke. Active state filled with `#01421e`, featuring a crisp white geometric checkmark.
- **Avionics Toggle Switches**: Styled after cockpit circuit breakers and flip switches. Horizontal track `#070c09`, thumb `#233328` with an active state illuminating a green status LED notch.

### 5. Input Fields & Vector Coordinate Pickers
- Darkened inset surface (`#070c09`), bordered by `#233328`.
- Focus state activates an intense `#26d07c` border ring and inner technical grid highlight. Labels display above the input in uppercase `label-telemetry` styling with tactical grey-green tint (`#8a9e91`).

### 6. Cards & Avionics Panels
- Deep container fill (`#141f18`) with 1px technical border (`rgba(38, 208, 124, 0.15)`).
- Panel headers feature a small institutional brass accent tag or crossed-carbines watermark icon in the top right corner.