import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideNavItem } from './SideNavItem';
import { IconPerson, IconBook, IconSettings, IconStar } from '../../icons';

const meta = {
  component: SideNavItem,
  tags: ['ai-generated'],
  args: { children: 'Profil', icon: <IconPerson /> },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 220 }}><Story /></div>],
} satisfies Meta<typeof SideNavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { active: true, children: 'Langganan & tagihan', icon: <IconStar /> } };

export const Nav: Story = {
  render: () => (
    <nav style={{ display: 'grid', gap: 2, width: 220 }}>
      <SideNavItem icon={<IconBook />} active>Skripsi</SideNavItem>
      <SideNavItem icon={<IconPerson />}>Profil</SideNavItem>
      <SideNavItem icon={<IconStar />}>Langganan</SideNavItem>
      <SideNavItem icon={<IconSettings />}>Pengaturan</SideNavItem>
    </nav>
  ),
};
