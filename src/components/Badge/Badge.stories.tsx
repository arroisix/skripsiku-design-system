import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  args: { children: 'Draft', tone: 'neutral' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral', 'brand', 'success', 'warning', 'danger'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge tone="neutral">Draft</Badge>
      <Badge tone="brand">Aktif</Badge>
      <Badge tone="success">Selesai</Badge>
      <Badge tone="warning">Revisi</Badge>
      <Badge tone="danger">Ditolak</Badge>
    </div>
  ),
};
