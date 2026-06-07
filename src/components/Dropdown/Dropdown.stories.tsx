import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import { Dropdown, type DropdownOption } from './Dropdown';

const OPTIONS: DropdownOption[] = [
  { value: 'kuantitatif', label: 'Kuantitatif', description: 'Survei, eksperimen, statistik' },
  { value: 'kualitatif', label: 'Kualitatif', description: 'Wawancara, studi kasus' },
  { value: 'mixed', label: 'Mixed Methods', description: 'Gabungan kuantitatif + kualitatif' },
  { value: 'literatur', label: 'Studi Literatur', description: 'Systematic review / meta' },
];

const meta = {
  component: Dropdown,
  tags: ['ai-generated'],
  args: {
    label: 'Pendekatan penelitian',
    placeholder: 'Pilih pendekatan…',
    options: OPTIONS,
  },
  argTypes: {
    options: { control: false },
    error: { control: 'text' },
  },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320, minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { defaultValue: 'kuantitatif' },
};

export const WithHelper: Story = {
  args: { helperText: 'Pilih yang paling sesuai dengan rumusan masalahmu.' },
};

export const Error: Story = {
  args: { error: 'Wajib dipilih sebelum lanjut' },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: /pendekatan/i });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Wajib dipilih sebelum lanjut')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const OpenAndSelect: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: /pendekatan/i });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(trigger);
    const listbox = await canvas.findByRole('listbox');
    await expect(listbox).toBeVisible();

    await userEvent.click(canvas.getByRole('option', { name: /^Kualitatif/ }));
    await waitFor(() => expect(trigger).toHaveTextContent('Kualitatif'));
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  },
};

export const KeyboardNav: Story = {
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: /pendekatan/i });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}'); // open
    await canvas.findByRole('listbox');
    await userEvent.keyboard('{ArrowDown}{Enter}'); // move to 2nd, select
    await waitFor(() => expect(trigger).toHaveTextContent('Kualitatif'));
  },
};
