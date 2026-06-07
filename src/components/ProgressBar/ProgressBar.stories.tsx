import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ProgressBar } from './ProgressBar';

const meta = {
  component: ProgressBar,
  tags: ['ai-generated'],
  args: { value: 65, max: 100, tone: 'brand' },
  argTypes: { tone: { control: 'inline-radio', options: ['brand', 'success', 'warning', 'danger'] } },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65');
  },
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 240 }}>
      <ProgressBar value={28} tone="brand" />
      <ProgressBar value={100} tone="success" />
      <ProgressBar value={60} tone="warning" />
      <ProgressBar value={90} tone="danger" />
    </div>
  ),
};
