import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Switch } from './Switch';

const meta = {
  component: Switch,
  tags: ['ai-generated'],
  args: { 'aria-label': 'Notifikasi' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Toggle: Story = {
  play: async ({ canvas }) => {
    const sw = canvas.getByRole('switch', { name: 'Notifikasi' });
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute('aria-checked', 'true');
  },
};
