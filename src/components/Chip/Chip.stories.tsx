import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Chip } from './Chip';

const meta = {
  component: Chip,
  tags: ['ai-generated'],
  args: { children: 'Teknik' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { defaultSelected: true, children: 'Psikologi' },
};

export const WithCount: Story = {
  args: { children: 'Teknik', count: 3 },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip defaultSelected>Semua</Chip>
      <Chip count={12}>Teknik</Chip>
      <Chip count={3}>Psikologi</Chip>
      <Chip count={7}>Ekonomi</Chip>
    </div>
  ),
};

export const Toggle: Story = {
  play: async ({ canvas }) => {
    const chip = canvas.getByRole('button', { name: /teknik/i });
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(chip);
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
  },
};
