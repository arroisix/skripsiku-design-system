import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { ToggleGroup } from './ToggleGroup';
import { IconList, IconBook, IconMenu } from '../../icons';

const meta = {
  component: ToggleGroup,
  tags: ['ai-generated'],
  args: {
    items: [
      { value: 'outline', label: 'Outline' },
      { value: 'card', label: 'Card' },
      { value: 'compact', label: 'Compact' },
    ],
  },
  argTypes: { items: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  play: async ({ canvas }) => {
    const card = canvas.getByRole('button', { name: 'Card' });
    await expect(card).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(card);
    await expect(card).toHaveAttribute('aria-pressed', 'true');
  },
};

export const Icon: Story = {
  args: {
    items: [
      { value: 'list', icon: <IconList />, 'aria-label': 'List' },
      { value: 'book', icon: <IconBook />, 'aria-label': 'Book' },
      { value: 'menu', icon: <IconMenu />, 'aria-label': 'Menu' },
    ],
  },
};

export const IconText: Story = {
  args: {
    items: [
      { value: 'list', icon: <IconList />, label: 'Daftar' },
      { value: 'book', icon: <IconBook />, label: 'Baca' },
    ],
  },
};
