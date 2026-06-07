import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Input } from './Input';

const MailIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm1.4.5L8 8.3l4.6-3.8H3.4zM13 5.9l-4.6 3.8a.6.6 0 0 1-.8 0L3 5.9V12h10V5.9z" />
  </svg>
);

const meta = {
  component: Input,
  tags: ['ai-generated'],
  args: {
    placeholder: 'mis. indra@kampus.ac.id',
  },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Email address' },
};

export const WithLabelHelper: Story = {
  args: {
    label: 'Email address',
    helperText: 'Gunakan email kampusmu (.ac.id)',
  },
};

export const Filled: Story = {
  args: { label: 'Email address', defaultValue: 'indra.pratama@kampus.ac.id' },
};

export const WithLeadingIcon: Story = {
  args: { label: 'Email address', icon: <MailIcon />, iconPosition: 'leading' },
};

export const WithTrailingIcon: Story = {
  args: { label: 'Email address', icon: <MailIcon />, iconPosition: 'trailing' },
};

export const Error: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'invalid.email',
    error: 'Format email tidak valid',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByLabelText('Email address');
    // error wires aria-invalid + links the message via aria-describedby
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Format email tidak valid')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: { label: 'Email address', disabled: true },
};

export const Typing: Story = {
  args: { label: 'Email address' },
  play: async ({ canvas }) => {
    const input = canvas.getByLabelText<HTMLInputElement>('Email address');
    await userEvent.type(input, 'halo@kampus.ac.id');
    await expect(input).toHaveValue('halo@kampus.ac.id');
  },
};
