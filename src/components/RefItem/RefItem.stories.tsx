import type { Meta, StoryObj } from '@storybook/react-vite';
import { RefItem } from './RefItem';

const meta = {
  component: RefItem,
  tags: ['ai-generated'],
  args: {
    title: '[2024] Putri',
    subtitle: 'Burnout akademik pada mahasiswa pasca…',
    fileType: 'PDF',
  },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 256 }}><Story /></div>],
} satisfies Meta<typeof RefItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const List: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, width: 256 }}>
      <RefItem title="[2024] Putri" subtitle="Burnout akademik pada mahasiswa…" />
      <RefItem title="[2023] Santoso" subtitle="Pengembangan pariwisata desa…" thumbColor="linear-gradient(127deg,#2563eb,#1d4ed8)" fileType="DOI" />
    </div>
  ),
};
