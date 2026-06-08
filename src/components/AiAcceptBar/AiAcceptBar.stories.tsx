import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AiAcceptBar } from './AiAcceptBar';

const meta = {
  component: AiAcceptBar,
  tags: ['ai-generated'],
  args: { onAccept: fn(), onGuide: fn(), onThumbsUp: fn(), onThumbsDown: fn(), onReject: fn() },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AiAcceptBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
