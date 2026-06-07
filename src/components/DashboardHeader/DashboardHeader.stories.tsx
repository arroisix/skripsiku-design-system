import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { DashboardHeader } from './DashboardHeader';
import { Button } from '../Button';

const meta = {
  title: 'Organisms/Dashboard Header',
  component: DashboardHeader,
  tags: ['ai-generated'],
  args: {
    title: 'Flashcard hafalan',
    subtitle: 'Belajar definisi & konsep inti — geser atau klik kartu buat lihat jawaban.',
    backLabel: 'Kembali ke Simulasi Sidang',
    onBack: fn(),
  },
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 960 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The Figma composition: ghost + primary Button in the action slot. */
export const Default: Story = {
  args: {
    actions: (
      <>
        <Button variant="ghost">Acak</Button>
        <Button variant="primary">Buat deck baru</Button>
      </>
    ),
  },
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole('heading', { name: 'Flashcard hafalan' })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Buat deck baru' }));
    await userEvent.click(canvas.getByRole('button', { name: /kembali/i }));
    await expect(args.onBack).toHaveBeenCalledOnce();
  },
};

export const WithoutBackLink: Story = {
  args: {
    backLabel: undefined,
    actions: <Button variant="primary">Buat deck baru</Button>,
  },
};

export const TitleOnly: Story = {
  args: { backLabel: undefined, subtitle: undefined, actions: undefined },
};
