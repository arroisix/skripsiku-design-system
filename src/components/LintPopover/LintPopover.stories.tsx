import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { LintPopover } from './LintPopover';

const meta = {
  component: LintPopover,
  tags: ['ai-generated'],
  args: {
    type: 'typo',
    label: 'PUEBI · Typo',
    wrong: 'kuantitatife',
    correct: 'kuantitatif',
    children: 'Kata "kuantitatif" tidak pakai akhiran -e dalam Bahasa Indonesia. Standar PUEBI: kuantitatif.',
    onAccept: fn(),
    onIgnore: fn(),
    onDismiss: fn(),
  },
  argTypes: { type: { control: 'inline-radio', options: ['typo', 'eyd', 'plag'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LintPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typo: Story = {};
export const Eyd: Story = {
  args: { type: 'eyd', label: 'PUEBI · EYD', wrong: 'di rumah sakit', correct: 'di rumah sakit', children: 'Penulisan "di" sebagai preposisi dipisah dari kata berikutnya.' },
};
export const Plagiarism: Story = {
  args: { type: 'plag', label: 'Plagiarisme · 92%', wrong: undefined, correct: undefined, children: 'Kalimat ini mirip 92% dengan sumber lain. Parafrase atau tambahkan sitasi.', acceptLabel: 'Parafrase' },
};
