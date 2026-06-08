import type { Meta, StoryObj } from '@storybook/react-vite';
import { DeckCard } from './DeckCard';
import { Badge } from '../Badge';

const meta = {
  component: DeckCard,
  tags: ['ai-generated'],
  args: {
    title: 'Konsep inti skripsi',
    subtitle: 'Definisi utama: burnout, Gen Z, MBI-SS',
    thumbColor: '#ffd4e3',
  },
  argTypes: { meta: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DeckCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    meta: (
      <>
        <Badge tone="brand">8 kartu</Badge>
        <span style={{ color: 'var(--color-text-faint)', fontSize: 12 }}>dari Bab 1 + Bab 2 · 2 hari lalu</span>
      </>
    ),
  },
};
