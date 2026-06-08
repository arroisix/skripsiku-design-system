import type { Meta, StoryObj } from '@storybook/react-vite';
import { PagePreview } from './PagePreview';
import { Button } from '../Button';

const meta = {
  component: PagePreview,
  tags: ['ai-generated'],
  args: {
    status: 'done',
    statusLabel: 'SELESAI',
    title: 'Lembar Pengesahan',
    stats: [
      { label: 'Jumlah kata', value: '64' },
      { label: 'Terakhir diedit', value: '2 hari lalu' },
    ],
    caption: 'Halaman ini udah selesai. Bisa diubah lagi kalau perlu.',
  },
  argTypes: { stats: { control: false }, actions: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Done: Story = {
  args: {
    actions: (
      <>
        <Button variant="secondary" size="sm">Buka halaman</Button>
        <Button variant="secondary" size="sm">Tandai belum selesai</Button>
      </>
    ),
  },
};

export const InProgress: Story = {
  args: { status: 'progress', statusLabel: 'DIKERJAKAN', title: 'Bab 2 — Tinjauan Pustaka' },
};

export const Empty: Story = {
  args: { status: 'empty', statusLabel: 'KOSONG', title: 'Bab 4 — Hasil', stats: undefined, caption: 'Halaman ini masih kosong.' },
};
