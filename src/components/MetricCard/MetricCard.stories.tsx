import type { Meta, StoryObj } from '@storybook/react-vite';
import { MetricCard } from './MetricCard';
import { IconCheckmarkCircle, IconBook, IconTime } from '../../icons';

const meta = {
  component: MetricCard,
  tags: ['ai-generated'],
  args: {
    value: '78%',
    label: 'Kesiapan materi',
    icon: <IconCheckmarkCircle />,
    delta: '+6%',
    deltaDirection: 'up',
    badgeTone: 'brand',
  },
  argTypes: {
    icon: { control: false },
    badgeTone: { control: 'inline-radio', options: ['brand', 'success', 'warning', 'danger'] },
    deltaDirection: { control: 'inline-radio', options: ['up', 'down'] },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <MetricCard value="78%" label="Kesiapan materi" icon={<IconCheckmarkCircle />} delta="+6%" badgeTone="brand" />
      <MetricCard value="12" label="Bab selesai" icon={<IconBook />} delta="+2" badgeTone="success" />
      <MetricCard value="3 hari" label="Menuju deadline" icon={<IconTime />} delta="-1" deltaDirection="down" badgeTone="warning" />
    </div>
  ),
};
