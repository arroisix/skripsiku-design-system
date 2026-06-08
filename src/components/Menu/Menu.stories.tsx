import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuLabel, MenuSeparator } from './Menu';
import { MenuItem } from '../MenuItem';
import { MenuItemRich } from '../MenuItemRich';
import {
  IconPencil, IconCopy, IconChevronUp, IconChevronDown, IconArrowForward,
  IconTrash, IconDownload, IconSparkles,
} from '../../icons';

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Right-click style menu built from MenuItem rows + a label + separators. */
export const ContextMenu: Story = {
  render: () => (
    <Menu style={{ width: 248 }}>
      <MenuLabel>Daftar Pustaka</MenuLabel>
      <MenuItem icon={<IconPencil />} shortcut="F2">Rename</MenuItem>
      <MenuItem icon={<IconCopy />} shortcut="⌘D">Duplikat</MenuItem>
      <MenuSeparator />
      <MenuItem icon={<IconChevronUp />} shortcut="⌘↑">Pindah ke atas</MenuItem>
      <MenuItem icon={<IconChevronDown />} shortcut="⌘↓">Pindah ke bawah</MenuItem>
      <MenuSeparator />
      <MenuItem icon={<IconArrowForward />}>Loncat ke halaman</MenuItem>
      <MenuSeparator />
      <MenuItem icon={<IconTrash />} tone="danger" shortcut="⌫">Hapus</MenuItem>
    </Menu>
  ),
};

/** "Tampilan" (view) menu with checkable rows toggling display options. */
export const ViewMenu: Story = {
  render: () => (
    <Menu style={{ width: 232 }}>
      <MenuLabel>TAMPILAN</MenuLabel>
      <MenuItem checked>Penggaris</MenuItem>
      <MenuItem checked={false}>Garis kisi</MenuItem>
      <MenuItem checked={false}>Panel navigasi</MenuItem>
      <MenuItem checked={false}>Mode fokus</MenuItem>
    </Menu>
  ),
};

/** Overflow ("…") menu with labelled sections of rich rows. */
export const MoreMenu: Story = {
  render: () => (
    <Menu style={{ width: 320 }}>
      <MenuLabel>EXPORT</MenuLabel>
      <MenuItemRich icon={<IconDownload />} subtitle="Word document siap submit">Export ke .docx</MenuItemRich>
      <MenuItemRich icon={<IconDownload />} subtitle="Format final, locked layout">Export ke .pdf</MenuItemRich>
      <MenuSeparator />
      <MenuLabel>AI CONVERT</MenuLabel>
      <MenuItemRich tone="ai" icon={<IconSparkles />} subtitle="Auto-generate slide presentasi sidang">Convert ke slides</MenuItemRich>
      <MenuItemRich tone="ai" icon={<IconSparkles />} subtitle="Extract definisi & konsep jadi kartu hafalan">Convert ke flashcard</MenuItemRich>
      <MenuItemRich tone="ai" icon={<IconSparkles />} subtitle="Bikin 5–10 pertanyaan ala dosen penguji">Convert ke quiz</MenuItemRich>
    </Menu>
  ),
};
