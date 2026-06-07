import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Radio } from './Radio';

const meta = {
  component: Radio,
  tags: ['ai-generated'],
  args: { name: 'approach', label: 'Kuantitatif' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { defaultChecked: true },
};

export const WithDescription: Story = {
  args: { description: 'Survei, eksperimen, statistik' },
};

export const Disabled: Story = {
  args: { disabled: true, description: 'Tidak tersedia' },
};

export const Group: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} role="radiogroup">
      <Radio {...args} value="kuantitatif" label="Kuantitatif" description="Survei, eksperimen, statistik" defaultChecked />
      <Radio {...args} value="kualitatif" label="Kualitatif" description="Wawancara, studi kasus" />
      <Radio {...args} value="mixed" label="Mixed Methods" description="Gabungan keduanya" />
    </div>
  ),
  play: async ({ canvas }) => {
    const kualitatif = canvas.getByRole('radio', { name: /kualitatif/i });
    await expect(kualitatif).not.toBeChecked();
    await userEvent.click(kualitatif);
    await expect(kualitatif).toBeChecked();
    // single-choice: selecting one clears the previously selected
    await expect(canvas.getByRole('radio', { name: /kuantitatif/i })).not.toBeChecked();
  },
};
