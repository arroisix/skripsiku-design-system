import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Ruler, type RulerIndents } from './Ruler';

const meta = {
  title: 'Components/Ruler',
  component: Ruler,
  tags: ['ai-generated'],
  args: { state: 'default' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'first-line-indent', 'hanging-indent'] },
    onChange: { control: false },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Ruler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "hanging-indent"
  }
};
export const FirstLineIndent: Story = { args: { state: 'first-line-indent' } };
export const HangingIndent: Story = { args: { state: 'hanging-indent' } };

/** Drag the triangle markers (or focus one and use ← →). Values update live. */
export const Interactive: Story = {
  render: (args) => {
    const [indents, setIndents] = useState<RulerIndents>({ firstLine: 0, left: 0, right: 0 });
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Ruler {...args} onChange={setIndents} />
        <code style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-text-mute)' }}>
          first-line: {indents.firstLine} cm · left: {indents.left} cm · right: {indents.right} cm
        </code>
      </div>
    );
  },
  play: async ({ canvas }) => {
    const firstLine = canvas.getByRole('slider', { name: /baris pertama/i });
    firstLine.focus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    await expect(Number(firstLine.getAttribute('aria-valuenow'))).toBeGreaterThan(0);
  },
};
