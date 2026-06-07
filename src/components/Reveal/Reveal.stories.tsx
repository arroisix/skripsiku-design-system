import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Reveal } from './Reveal';

const meta = {
  title: 'Utilities/Reveal',
  component: Reveal,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { children: 'Reveal me' },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Card = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      padding: 'var(--space-6)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-2)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--color-text)',
    }}
  >
    {children}
  </div>
);

/** Scroll down to trigger the staggered reveal (each item rises + fades in). */
export const Staggered: Story = {
  render: () => (
    <div style={{ padding: 'var(--space-8)', display: 'grid', gap: 'var(--space-6)' }}>
      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-mute)' }}>
        ↓ Scroll to reveal
      </p>
      <div style={{ height: '90vh' }} />
      {[0, 1, 2, 3].map((i) => (
        <Reveal key={i} y={64} delay={i * 0.08}>
          <Card>Item {i + 1} — reveals on scroll (Framer easing, 0.7s)</Card>
        </Reveal>
      ))}
    </div>
  ),
};
