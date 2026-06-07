import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Landing } from './Landing';

const meta = {
  title: 'Pages/Landing',
  component: Landing,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole('heading', { name: /tanpa drama/i }),
    ).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Mulai gratis' })).toBeVisible();
  },
};
