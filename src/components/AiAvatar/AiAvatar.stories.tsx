import type { Meta, StoryObj } from '@storybook/react-vite';
import { AiAvatar } from './AiAvatar';

const meta = {
  component: AiAvatar,
  tags: ['ai-generated'],
  args: { tone: 'soft' },
  argTypes: { tone: { control: 'inline-radio', options: ['soft', 'solid'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AiAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {};
export const Solid: Story = { args: { tone: 'solid' } };

export const Both: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <AiAvatar tone="soft" />
      <AiAvatar tone="solid" />
    </div>
  ),
};
