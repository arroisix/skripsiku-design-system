import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';

const meta = {
  component: ListItem,
  tags: ['ai-generated'],
  args: { children: 'Bab 2 - Tinjauan Pustaka' },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };

export const List: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 2, width: 280 }}>
      <ListItem>Bab 1 - Pendahuluan</ListItem>
      <ListItem active>Bab 2 - Tinjauan Pustaka</ListItem>
      <ListItem>Bab 3 - Metodologi</ListItem>
      <ListItem>Bab 4 - Hasil</ListItem>
    </div>
  ),
};
