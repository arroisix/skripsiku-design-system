/**
 * Design tokens — SKRIPSIKU DESIGN SYSTEM · Foundation
 * Typed mirror of tokens.css, generated from Figma (file VlmpRAheWLWqFUv9wT9HLg).
 *
 * Use `cssVar(...)` to reference the live CSS custom property (theme-aware) from
 * JS/TS, or read the raw hex maps in `color.light` / `color.dark` directly.
 */

/* ----------------------------------------------------------------------------
 * Color — theme-aware tokens have separate light/dark values; canvas is fixed.
 * -------------------------------------------------------------------------- */
export const color = {
  light: {
    bg: '#fafaf8',
    surface: '#ffffff',
    'surface-2': '#f5f5f4',
    'surface-3': '#ebebe9',
    'surface-4': '#e5e5e2',
    border: '#e7e5e4',
    'border-strong': '#d6d3d1',
    text: '#18181b',
    'text-soft': '#3f3f46',
    'text-mute': '#71717a',
    'text-faint': '#a1a1aa',
    brand: '#2563eb',
    'brand-hover': '#1d4ed8',
    'brand-soft': '#dbeafe',
    'brand-tint': '#eff6ff',
    'brand-ink': '#1d4ed8',
    'on-brand': '#ffffff',
    success: '#16a34a',
    warning: '#d97706',
    danger: '#dc2626',
    'danger-hover': '#b91c1c',
    info: '#0284c7',
  },
  dark: {
    bg: '#101010',
    surface: '#191920',
    'surface-2': '#20222e',
    'surface-3': '#282b3c',
    'surface-4': '#4b4e5f',
    border: '#2b2d3a',
    'border-strong': '#3a3d4d',
    text: '#ffffff',
    'text-soft': '#dedede',
    'text-mute': '#999999',
    'text-faint': '#666666',
    brand: '#5f2bce',
    'brand-hover': '#6e36e6',
    'brand-soft': '#2a225f',
    'brand-tint': '#251f40',
    'brand-ink': '#b6a6f3',
    'on-brand': '#ffffff',
    success: '#03ac5c',
    warning: '#f2c04c',
    danger: '#ff3b30',
    'danger-hover': '#e02d22',
    info: '#3b82f6',
  },
  /** Canvas tokens are fixed dark in both themes. */
  canvas: {
    canvas: '#18181b',
    'canvas-raised': '#27272a',
    'canvas-sunken': '#09090b',
    scrim: 'rgba(9, 9, 11, 0.64)',
  },
} as const;

/* ----------------------------------------------------------------------------
 * Radius
 * -------------------------------------------------------------------------- */
export const radius = {
  none: '0px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '999px',
} as const;

/* ----------------------------------------------------------------------------
 * Spacing — 4px base scale (key N === N * 4px)
 * -------------------------------------------------------------------------- */
export const space = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

/* ----------------------------------------------------------------------------
 * Typography — 15 styles. Display = Fraunces serif, rest = system sans.
 * -------------------------------------------------------------------------- */
export const fontFamily = {
  sans: "'Nunito', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif",
  display: "'Fraunces', Georgia, 'Times New Roman', serif",
} as const;

type TypeStyle = {
  family: keyof typeof fontFamily;
  weight: number;
  size: number;
  lineHeight: number;
  letterSpacing: number;
};

export const typography = {
  'display-2xl': { family: 'display', weight: 600, size: 48, lineHeight: 56, letterSpacing: -1.2 },
  'display-xl': { family: 'display', weight: 600, size: 36, lineHeight: 42, letterSpacing: -0.8 },
  'display-lg': { family: 'display', weight: 600, size: 28, lineHeight: 34, letterSpacing: -0.4 },
  'heading-xl': { family: 'sans', weight: 600, size: 22, lineHeight: 28, letterSpacing: -0.3 },
  'heading-lg': { family: 'sans', weight: 600, size: 18, lineHeight: 24, letterSpacing: 0 },
  'heading-md': { family: 'sans', weight: 600, size: 15, lineHeight: 22, letterSpacing: 0 },
  'heading-sm': { family: 'sans', weight: 600, size: 13, lineHeight: 18, letterSpacing: 0 },
  'body-lg': { family: 'sans', weight: 400, size: 16, lineHeight: 24, letterSpacing: 0 },
  'body-md': { family: 'sans', weight: 400, size: 14, lineHeight: 20, letterSpacing: 0 },
  'body-sm': { family: 'sans', weight: 400, size: 13, lineHeight: 18, letterSpacing: 0 },
  'body-xs': { family: 'sans', weight: 400, size: 12, lineHeight: 16, letterSpacing: 0 },
  'label-md': { family: 'sans', weight: 500, size: 14, lineHeight: 18, letterSpacing: 0 },
  'label-sm': { family: 'sans', weight: 500, size: 13, lineHeight: 16, letterSpacing: 0 },
  'label-xs': { family: 'sans', weight: 500, size: 11, lineHeight: 14, letterSpacing: 0 },
  'caption-md': { family: 'sans', weight: 400, size: 12, lineHeight: 16, letterSpacing: 0.1 },
} as const satisfies Record<string, TypeStyle>;

/* ----------------------------------------------------------------------------
 * Shadow / Elevation — theme-aware.
 * -------------------------------------------------------------------------- */
export const shadow = {
  light: {
    1: '0px 1px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)',
    2: '0px 1px 3px 0px rgba(0, 0, 0, 0.04), 0px 4px 12px 0px rgba(0, 0, 0, 0.06)',
    3: '0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 12px 32px 0px rgba(0, 0, 0, 0.08)',
  },
  dark: {
    1: '0px 2px 4px 0px rgba(0, 0, 0, 0.3)',
    2: '0px 2px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 20px 0px rgba(0, 0, 0, 0.4)',
    3: '0px 20px 50px 0px rgba(0, 0, 0, 0.5)',
  },
} as const;

/* ----------------------------------------------------------------------------
 * Blur (px radii)
 * -------------------------------------------------------------------------- */
export const blur = {
  sm: '4px',
  md: '12px',
  lg: '24px',
  backdrop: '20px',
  progressive: '24px',
} as const;

/* ----------------------------------------------------------------------------
 * Helpers
 * -------------------------------------------------------------------------- */

/** Reference a live CSS custom property, e.g. cssVar('color-brand') -> 'var(--color-brand)'. */
export function cssVar(name: string, fallback?: string): string {
  return fallback ? `var(--${name}, ${fallback})` : `var(--${name})`;
}

export type ColorToken = keyof typeof color.light;
export type CanvasToken = keyof typeof color.canvas;
export type RadiusToken = keyof typeof radius;
export type SpaceToken = keyof typeof space;
export type TypographyToken = keyof typeof typography;
export type ShadowToken = keyof typeof shadow.light;
export type BlurToken = keyof typeof blur;
export type ThemeName = 'light' | 'dark';
