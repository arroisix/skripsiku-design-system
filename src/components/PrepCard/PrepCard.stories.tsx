import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrepCard } from './PrepCard';
import { Badge } from '../Badge';

const meta = {
  component: PrepCard,
  tags: ['ai-generated'],
  args: {
    title: 'Quiz tanya-jawab',
    subtitle: 'Random soal gaya dosen + feedback',
    thumbColor: '#ffe8a3',
    trailing: <Badge tone="brand">Best 4/5</Badge>,
  },
  argTypes: { trailing: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PrepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
