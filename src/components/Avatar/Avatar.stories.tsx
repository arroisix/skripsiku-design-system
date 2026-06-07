import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
  component: Avatar,
  tags: ['ai-generated'],
  args: { name: 'Indra Pratama', size: 'md' },
  argTypes: { size: { control: 'inline-radio', options: ['2xs', 'xs', 'sm', 'md', 'lg'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar size="2xs" name="Indra Pratama" />
      <Avatar size="xs" name="Indra Pratama" />
      <Avatar size="sm" name="Indra Pratama" />
      <Avatar size="md" name="Indra Pratama" />
      <Avatar size="lg" name="Indra Pratama" />
    </div>
  ),
};

export const Photo: Story = {
  args: {
    size: 'lg',
    src: 'https://i.pravatar.cc/112?img=12',
    name: 'Indra Pratama',
  },
};
