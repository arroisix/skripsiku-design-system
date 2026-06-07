import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Toggle } from './Toggle';
import { IconStar, IconBook } from '../../icons';

const meta = {
  component: Toggle,
  tags: ['ai-generated'],
  args: { 'aria-label': 'Bookmark', icon: <IconStar /> },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconOnly: Story = {};

export const Active: Story = { args: { defaultPressed: true } };

export const IconText: Story = {
  args: { icon: <IconBook />, children: 'Baca', 'aria-label': undefined },
};

export const TextOnly: Story = {
  args: { icon: undefined, children: 'B', 'aria-label': 'Bold' },
};

export const Toggling: Story = {
  play: async ({ canvas }) => {
    const t = canvas.getByRole('button', { name: 'Bookmark' });
    await expect(t).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(t);
    await expect(t).toHaveAttribute('aria-pressed', 'true');
  },
};
