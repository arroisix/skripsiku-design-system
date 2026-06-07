import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageDot } from './PageDot';

const meta = {
  component: PageDot,
  tags: ['ai-generated'],
  args: { active: false },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof PageDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {};
export const Active: Story = { args: { active: true } };

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {[0, 1, 2, 3].map((i) => (
        <PageDot key={i} active={i === 1} />
      ))}
    </div>
  ),
};
