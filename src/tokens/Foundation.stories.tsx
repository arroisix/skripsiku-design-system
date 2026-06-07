import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import {
  color,
  radius,
  space,
  typography,
  blur,
  type ColorToken,
} from './tokens';

/**
 * Living documentation for the Foundation tokens, generated from Figma.
 * Switch the Theme toolbar (Light / Dark) to see color tokens re-resolve.
 */
const meta = {
  title: 'Foundation/Tokens',
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/* ----------------------------- shared building blocks ---------------------- */

const page: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  color: 'var(--color-text)',
  background: 'var(--color-bg)',
  padding: 'var(--space-8)',
  minHeight: '100vh',
};

const sectionTitle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 28,
  fontWeight: 600,
  letterSpacing: '-0.4px',
  margin: '0 0 4px',
};

const sectionNote: CSSProperties = {
  color: 'var(--color-text-mute)',
  fontSize: 14,
  margin: '0 0 24px',
};

const grid = (min = 140): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
  gap: 'var(--space-5)',
});

function Swatch({ token, group }: { token: string; group: 'light' | 'canvas' }) {
  const value =
    group === 'canvas'
      ? color.canvas[token as keyof typeof color.canvas]
      : `var(--color-${token})`;
  return (
    <div>
      <div
        style={{
          height: 88,
          borderRadius: 'var(--radius-lg)',
          background: value,
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-1)',
        }}
      />
      <div style={{ marginTop: 8, fontSize: 11, fontWeight: 500 }}>{token}</div>
      <div style={{ fontSize: 11, color: 'var(--color-text-mute)' }}>
        {color.light[token as ColorToken] ??
          color.canvas[token as keyof typeof color.canvas]}
      </div>
    </div>
  );
}

/* --------------------------------- stories --------------------------------- */

const surfaceTokens: ColorToken[] = [
  'bg', 'surface', 'surface-2', 'surface-3', 'surface-4', 'border', 'border-strong',
];
const textTokens: ColorToken[] = ['text', 'text-soft', 'text-mute', 'text-faint'];
const brandTokens: ColorToken[] = [
  'brand', 'brand-hover', 'brand-soft', 'brand-tint', 'brand-ink', 'on-brand',
];
const stateTokens: ColorToken[] = ['success', 'warning', 'danger', 'info'];
const canvasTokens = ['canvas', 'canvas-raised', 'canvas-sunken'] as const;

export const Colors: Story = {
  render: () => (
    <div style={page}>
      <h2 style={sectionTitle}>Colors</h2>
      <p style={sectionNote}>
        Semantic tokens × 2 modes. Toggle the Theme toolbar to switch.
      </p>
      {(
        [
          ['Surfaces', surfaceTokens, 'light'],
          ['Text', textTokens, 'light'],
          ['Brand', brandTokens, 'light'],
          ['State', stateTokens, 'light'],
          ['Canvas · fixed dark', canvasTokens as unknown as ColorToken[], 'canvas'],
        ] as const
      ).map(([label, tokens, group]) => (
        <div key={label} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 13, color: 'var(--color-text-mute)', margin: '0 0 12px' }}>
            {label}
          </h3>
          <div style={grid()}>
            {tokens.map((t) => (
              <Swatch key={t} token={t} group={group as 'light' | 'canvas'} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    // Proves the token CSS actually loaded: --color-brand resolves to the Figma hex.
    const probe = document.createElement('div');
    probe.style.color = 'var(--color-brand)';
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    probe.remove();
    await expect(canvas.getByText('brand')).toBeVisible();
    // #2563eb (light brand) === rgb(37, 99, 235)
    await expect(resolved).toBe('rgb(37, 99, 235)');
  },
};

export const Typography: Story = {
  render: () => (
    <div style={page}>
      <h2 style={sectionTitle}>Typography</h2>
      <p style={sectionNote}>Display = Fraunces · UI text = SF Pro / system sans.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        {(Object.keys(typography) as (keyof typeof typography)[]).map((key) => {
          return (
            <div
              key={key}
              style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-6)' }}
            >
              <code
                style={{
                  width: 110,
                  flexShrink: 0,
                  fontSize: 11,
                  color: 'var(--color-text-mute)',
                }}
              >
                {key}
              </code>
              <span className={`type-${key}`}>The spectacle before us was indeed sublime</span>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={page}>
      <h2 style={sectionTitle}>Radius</h2>
      <p style={sectionNote}>9-step scale.</p>
      <div style={grid(120)}>
        {(Object.keys(radius) as (keyof typeof radius)[]).map((key) => (
          <div key={key}>
            <div
              style={{
                height: 72,
                background: 'var(--color-brand-soft)',
                border: '1px solid var(--color-brand)',
                borderRadius: `var(--radius-${key})`,
              }}
            />
            <div style={{ marginTop: 8, fontSize: 11, fontWeight: 500 }}>{key}</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-mute)' }}>{radius[key]}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div style={page}>
      <h2 style={sectionTitle}>Spacing</h2>
      <p style={sectionNote}>4px base scale — padding, gap, margin.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {(Object.keys(space) as unknown as (keyof typeof space)[]).map((key) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <code style={{ width: 64, fontSize: 11, color: 'var(--color-text-mute)' }}>
              sp-{key}
            </code>
            <div
              style={{
                height: 16,
                width: `var(--space-${key})`,
                background: 'var(--color-brand)',
                borderRadius: 'var(--radius-xs)',
              }}
            />
            <span style={{ fontSize: 11, color: 'var(--color-text-mute)' }}>{space[key]}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Elevation: Story = {
  render: () => (
    <div style={page}>
      <h2 style={sectionTitle}>Elevation &amp; Blur</h2>
      <p style={sectionNote}>Shadows are theme-aware. Blur radii below.</p>
      <div style={{ ...grid(180), marginBottom: 40 }}>
        {([1, 2, 3] as const).map((n) => (
          <div key={n}>
            <div
              style={{
                height: 96,
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: `var(--shadow-${n})`,
              }}
            />
            <div style={{ marginTop: 10, fontSize: 11, fontWeight: 500 }}>shadow-{n}</div>
          </div>
        ))}
      </div>
      <h3 style={{ fontSize: 13, color: 'var(--color-text-mute)', margin: '0 0 12px' }}>Blur</h3>
      <div style={grid(140)}>
        {(Object.keys(blur) as (keyof typeof blur)[]).map((key) => (
          <div key={key}>
            <code style={{ fontSize: 11, fontWeight: 500 }}>blur/{key}</code>
            <div style={{ fontSize: 11, color: 'var(--color-text-mute)' }}>{blur[key]}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
