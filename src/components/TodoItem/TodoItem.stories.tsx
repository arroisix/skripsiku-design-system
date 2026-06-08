import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { TodoItem } from './TodoItem';

const meta = {
  component: TodoItem,
  tags: ['ai-generated'],
  args: { children: 'Print draft Bab 1 untuk bimbingan' },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Todo: Story = {};
export const Done: Story = { args: { defaultDone: true } };

export const Checklist: Story = {
  render: () => (
    <div style={{ display: 'grid', width: 280 }}>
      <TodoItem defaultDone>Tentukan topik & rumusan masalah</TodoItem>
      <TodoItem defaultDone>Susun kerangka Bab 1</TodoItem>
      <TodoItem>Print draft Bab 1 untuk bimbingan</TodoItem>
      <TodoItem>Revisi sesuai catatan dosen</TodoItem>
    </div>
  ),
};

export const Toggle: Story = {
  play: async ({ canvas }) => {
    const item = canvas.getByRole('checkbox', { name: /print draft/i });
    await expect(item).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(item);
    await expect(item).toHaveAttribute('aria-checked', 'true');
  },
};
