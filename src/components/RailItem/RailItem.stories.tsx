import type { Meta, StoryObj } from '@storybook/react-vite';
import { RailItem } from './RailItem';
import { IconBook, IconChatbubble, IconCompass, IconTime } from '../../icons';

const meta = {
  component: RailItem,
  tags: ['ai-generated'],
  args: { children: 'Skripsi', icon: <IconBook /> },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RailItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };

export const Rail: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 6, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 12 }}>
      <RailItem icon={<IconBook />} active>Skripsi</RailItem>
      <RailItem icon={<IconChatbubble />}>Copilot</RailItem>
      <RailItem icon={<IconCompass />}>Jelajah</RailItem>
      <RailItem icon={<IconTime />}>Riwayat</RailItem>
    </div>
  ),
};
