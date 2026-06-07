import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { Button } from './Button';

/** Sparkles icon (matches the Figma sample icon) — stories pass icons as ReactNode. */
const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9L19 14zM5 14l.9 2.1 2.1.9-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14z" />
  </svg>
);

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: {
    children: 'Submit',
    variant: 'primary',
    size: 'md',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'ghost', 'text', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    iconPosition: { control: 'inline-radio', options: ['leading', 'trailing'] },
    icon: { control: false },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------- core stories ------------------------------ */

export const Playground: Story = {};

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="text">Text</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const WithLeadingIcon: Story = {
  args: { icon: <SparklesIcon />, iconPosition: 'leading', children: 'Generate' },
};

export const WithTrailingIcon: Story = {
  args: { icon: <SparklesIcon />, iconPosition: 'trailing', children: 'Generate' },
};

export const IconOnly: Story = {
  args: { icon: <SparklesIcon />, children: undefined, 'aria-label': 'Generate' },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    // Proves the disabled attribute is wired (state the render alone doesn't assert).
    await expect(canvas.getByRole('button', { name: /submit/i })).toBeDisabled();
  },
};

/* ----------------------------- behaviour checks ---------------------------- */

export const ClickFires: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

/** The single project-wide CSS proof: primary background must resolve to the
 *  Figma brand token. Fails if Foundation tokens didn't load. */
export const CssCheck: Story = {
  args: { variant: 'primary' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /submit/i });
    // --color-brand (light) = #2563eb = rgb(37, 99, 235)
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(37, 99, 235)');
  },
};
