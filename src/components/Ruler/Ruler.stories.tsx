import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ruler } from './Ruler';

const meta = {
  title: 'Components/Ruler',
  component: Ruler,
  tags: ['ai-generated'],
  args: { state: 'default' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'first-line-indent', 'hanging-indent'] },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Ruler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FirstLineIndent: Story = { args: { state: 'first-line-indent' } };
export const HangingIndent: Story = { args: { state: 'hanging-indent' } };
