import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const meta = {
  component: Toast,
  tags: ['ai-generated'],
  args: { tone: 'info', children: 'Catatan disimpan' },
  argTypes: { tone: { control: 'inline-radio', options: ['info', 'success', 'warning', 'danger'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <Toast tone="info">Catatan disimpan</Toast>
      <Toast tone="success">Disimpan ke Keranjang Ide</Toast>
      <Toast tone="warning">Koneksi tidak stabil</Toast>
      <Toast tone="danger">Gagal menyimpan</Toast>
    </div>
  ),
};
