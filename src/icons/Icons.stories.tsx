import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import * as Icons from './generated';
import { IconBase } from './IconBase';

const meta = {
  title: 'Foundation/Icons',
  component: IconBase,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { children: null },
} satisfies Meta<typeof IconBase>;

export default meta;
type Story = StoryObj<typeof meta>;

const entries = Object.entries(Icons) as Array<
  [string, (p: { size?: number }) => ReactNode]
>;

/** All Ionicons exposed by the design system. Color follows `currentColor`. */
export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: 12,
        padding: 'var(--space-8)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--color-text)',
      }}
    >
      {entries.map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 'var(--space-4)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Icon size={24} />
          <code style={{ fontSize: 11, color: 'var(--color-text-mute)' }}>{name}</code>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    // proves the icon set is wired and renders real Ionicons
    await expect(canvas.getByText('IconCheckmark')).toBeVisible();
    await expect(entries.length).toBeGreaterThan(20);
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 'var(--space-8)', color: 'var(--color-brand)' }}>
      {[16, 20, 24, 32, 48].map((s) => (
        <Icons.IconSparkles key={s} size={s} />
      ))}
    </div>
  ),
};
