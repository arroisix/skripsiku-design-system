import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  component: Checkbox,
  tags: ['ai-generated'],
  args: { label: 'Saya menyadari aksi ini' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};

export const WithDescription: Story = {
  args: { description: 'Dokumen yang dihapus tidak bisa dipulihin.' },
};

export const Disabled: Story = {
  args: { defaultChecked: true, disabled: true },
};

export const Toggle: Story = {
  play: async ({ canvas }) => {
    const box = canvas.getByRole('checkbox', { name: /menyadari/i });
    await expect(box).not.toBeChecked();
    await userEvent.click(box);
    await expect(box).toBeChecked();
  },
};
