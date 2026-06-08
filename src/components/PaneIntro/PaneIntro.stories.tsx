import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PaneIntro } from './PaneIntro';

const meta = {
  component: PaneIntro,
  tags: ['ai-generated'],
  args: {
    title: 'Checklist sebelum sidang',
    children:
      'Tugas yang gampang lupa: print draft, revisian dosen, latihan presentasi. Tinggal centang sambil ngerjain.',
    onDismiss: fn(),
  },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PaneIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
