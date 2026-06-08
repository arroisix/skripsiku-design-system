import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItemRich } from './MenuItemRich';
import { IconDownload, IconSparkles, IconBook } from '../../icons';

const meta = {
  component: MenuItemRich,
  tags: ['ai-generated'],
  args: {
    children: 'Export ke .docx',
    subtitle: 'Word document siap submit',
    icon: <IconDownload />,
    tone: 'default',
  },
  argTypes: {
    tone: { control: 'inline-radio', options: ['default', 'ai'] },
    icon: { control: false },
  },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320, padding: 4, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, boxShadow: 'var(--shadow-2)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuItemRich>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { shortcut: '⌘E' } };

export const Menu: Story = {
  render: () => (
    <div role="menu" style={{ display: 'grid', gap: 2 }}>
      <MenuItemRich icon={<IconDownload />} subtitle="Word document siap submit" shortcut="⌘E">
        Export ke .docx
      </MenuItemRich>
      <MenuItemRich tone="ai" icon={<IconSparkles />} subtitle="Rangkum bab jadi poin singkat" chevron>
        Ringkas dengan AI
      </MenuItemRich>
      <MenuItemRich icon={<IconBook />} subtitle="Buka panduan penulisan">
        Bantuan
      </MenuItemRich>
    </div>
  ),
};
