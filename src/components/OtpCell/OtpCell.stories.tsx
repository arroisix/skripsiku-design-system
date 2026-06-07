import type { Meta, StoryObj } from '@storybook/react-vite';
import { OtpCell } from './OtpCell';

const meta = {
  component: OtpCell,
  tags: ['ai-generated'],
  args: { state: 'default', children: '8' },
  argTypes: { state: { control: 'inline-radio', options: ['default', 'error', 'success'] } },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof OtpCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Code: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <OtpCell>2</OtpCell>
      <OtpCell>0</OtpCell>
      <OtpCell>2</OtpCell>
      <OtpCell>5</OtpCell>
      <OtpCell state="default" />
      <OtpCell state="default" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <OtpCell state="default">1</OtpCell>
      <OtpCell state="error">8</OtpCell>
      <OtpCell state="success">8</OtpCell>
    </div>
  ),
};
