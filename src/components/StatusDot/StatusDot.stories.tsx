import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusDot } from './StatusDot';

const meta = {
  component: StatusDot,
  tags: ['ai-generated'],
  args: { status: 'empty', children: 'Belum' },
  argTypes: { status: { control: 'inline-radio', options: ['empty', 'progress', 'done'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Lifecycle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <StatusDot status="empty">Belum</StatusDot>
      <StatusDot status="progress">Sedang dikerjakan</StatusDot>
      <StatusDot status="done">Selesai</StatusDot>
    </div>
  ),
};
