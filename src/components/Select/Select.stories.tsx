import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { IconSwapVertical } from '../../icons';

const meta = {
  component: Select,
  tags: ['ai-generated'],
  args: { children: 'Terakhir dibuka', leadingIcon: <IconSwapVertical /> },
  argTypes: { leadingIcon: { control: false } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Open: Story = { args: { open: true } };
export const Error: Story = { args: { error: true } };
export const Disabled: Story = { args: { disabled: true } };
