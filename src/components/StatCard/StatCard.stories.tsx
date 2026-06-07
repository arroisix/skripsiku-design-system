import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './StatCard';
import { IconFlash, IconBook } from '../../icons';

const meta = {
  component: StatCard,
  tags: ['ai-generated'],
  args: { value: '78%', label: 'Kesiapan', icon: <IconFlash /> },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <StatCard value="78%" label="Kesiapan" icon={<IconFlash />} />
      <StatCard value="12" label="Bab selesai" icon={<IconBook />} />
    </div>
  ),
};
