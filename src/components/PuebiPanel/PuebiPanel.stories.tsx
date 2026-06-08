import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PuebiPanel } from './PuebiPanel';
import { Chip } from '../Chip';

const meta = {
  component: PuebiPanel,
  tags: ['ai-generated'],
  args: {
    title: 'Cek PUEBI dan Turnitin',
    subtitle: '5 issue ditemukan · 0 sudah diperbaiki',
    onDismiss: fn(),
    onFixAll: fn(),
    tabs: (
      <>
        <Chip defaultSelected count={5}>Semua</Chip>
        <Chip count={2}>Typo</Chip>
        <Chip count={2}>EYD</Chip>
        <Chip count={1}>Plagiat</Chip>
      </>
    ),
    issues: [
      { tone: 'danger', badge: 'PUEBI · Typo', location: 'Abstrak (ID + EN)', wrong: 'kuantitatife', correct: 'kuantitatif' },
      { tone: 'danger', badge: 'PUEBI · Typo', location: 'Abstrak (ID + EN)', wrong: 'peneletian', correct: 'penelitian' },
      { tone: 'warning', badge: 'EYD · Preposisi', location: 'Abstrak (ID + EN)', wrong: 'dimana', correct: 'di mana' },
      { tone: 'warning', badge: 'EYD · Pilihan Kata', location: 'Bab 1 - Pendahuluan', wrong: 'sebanyak', correct: 'sebesar' },
      { tone: 'brand', badge: 'Turnitin Risk · 73%', location: 'Bab 1 - Pendahuluan', quote: '“Gen Z di Asia Tenggara menghabiskan rata-rata 7,2 jam per hari di media sosial, …”' },
    ],
  },
  argTypes: { tabs: { control: false }, issues: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PuebiPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
