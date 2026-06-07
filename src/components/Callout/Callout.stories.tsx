import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout } from './Callout';
import { Button } from '../Button';

const meta = {
  component: Callout,
  tags: ['ai-generated'],
  args: {
    tone: 'brand',
    title: 'Saran Copilot',
    children: 'Tips singkat dari Copilot buat bantu progres skripsimu.',
  },
  argTypes: {
    tone: { control: 'inline-radio', options: ['brand', 'info', 'success', 'warning', 'danger'] },
    icon: { control: false },
    action: { control: false },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { action: <Button size="sm">Aksi</Button> },
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 340 }}>
      <Callout tone="brand" title="Saran Copilot">Tips singkat buat progres skripsimu.</Callout>
      <Callout tone="info" title="Info">Sumber ini terbit lebih dari 10 tahun lalu.</Callout>
      <Callout tone="success" title="Mantap">Bab 1 lolos pengecekan PUEBI.</Callout>
      <Callout tone="warning" title="Perhatian">Sitasi belum lengkap di paragraf ini.</Callout>
      <Callout tone="danger" title="Plagiarisme terdeteksi">Kalimat ini mirip 92% dengan sumber lain.</Callout>
    </div>
  ),
};
