import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItem } from './MenuItem';
import { IconPencil, IconCopy, IconTrash } from '../../icons';

const meta = {
  component: MenuItem,
  tags: ['ai-generated'],
  args: { children: 'Rename', icon: <IconPencil />, shortcut: 'F2', tone: 'default' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['default', 'danger'] },
    icon: { control: false },
  },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 220,
          padding: 4,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          boxShadow: 'var(--shadow-2)',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Menu: Story = {
  render: () => (
    <div role="menu" style={{ display: 'grid' }}>
      <MenuItem icon={<IconPencil />} shortcut="F2">Rename</MenuItem>
      <MenuItem icon={<IconCopy />} shortcut="⌘D">Duplikat</MenuItem>
      <MenuItem icon={<IconTrash />} tone="danger" shortcut="⌫">Hapus</MenuItem>
    </div>
  ),
};
