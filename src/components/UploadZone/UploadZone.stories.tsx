import type { Meta, StoryObj } from '@storybook/react-vite';
import { UploadZone } from './UploadZone';

const meta = {
  component: UploadZone,
  tags: ['ai-generated'],
  args: { state: 'idle', hint: '.docx · .pdf · link Google Docs · max 50MB' },
  argTypes: { state: { control: 'inline-radio', options: ['idle', 'uploading', 'success', 'error'] } },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 680 }}><Story /></div>],
} satisfies Meta<typeof UploadZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};

export const Uploading: Story = {
  args: { state: 'uploading', filename: 'Skripsi_Indra_draft.docx', progress: 62 },
};

export const Success: Story = {
  args: {
    state: 'success',
    filename: 'Skripsi_Indra_draft.docx',
    meta: 'Berhasil diunggah · 12 MB · 38 halaman terbaca',
    status: 'Selesai',
    caption: 'Struktur terbaca: Cover, Daftar Isi, Bab 1–4, 14 sitasi.',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    filename: 'Skripsi_Indra_draft.docx',
    meta: 'File rusak atau melebihi 50MB',
    status: 'Gagal',
    caption: 'Coba kompres file atau unggah ulang.',
  },
};
