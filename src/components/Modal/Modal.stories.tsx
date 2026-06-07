import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta = {
  component: Modal,
  tags: ['ai-generated'],
  args: { tone: 'default', title: 'Pulihkan versi ini?' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['default', 'destructive'] },
    icon: { control: false },
    actions: { control: false },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Restore: Story = {
  args: {
    children:
      'Dokumen akan dikembalikan ke versi ini. Versi sekarang tetap tersimpan di history dan bisa di-undo lagi.',
    actions: (
      <>
        <Button variant="secondary" size="sm" onClick={fn()}>Batal</Button>
        <Button variant="primary" size="sm" onClick={fn()}>Pulihkan</Button>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    tone: 'destructive',
    title: 'Hapus permanen?',
    children: 'Tindakan ini nggak bisa dibatalkan. Data yang dihapus akan hilang selamanya.',
    actions: (
      <>
        <Button variant="secondary" size="sm" onClick={fn()}>Batal</Button>
        <Button variant="danger" size="sm" onClick={fn()}>Hapus</Button>
      </>
    ),
  },
};
