import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import { Textarea } from './Textarea';

const SAMPLE =
  'Pengembangan sektor pariwisata di Desa Pagerharjo kini dipandang sebagai strategi krusial untuk mengakselerasi kesejahteraan komunitas lokal…';

const meta = {
  component: Textarea,
  tags: ['ai-generated'],
  args: { placeholder: 'Tempel paragraf kamu di sini…' },
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabelHelper: Story = {
  args: { label: 'Abstrak', helperText: 'Maks. 500 kata. Bisa di-parafrase ulang.' },
};

export const Filled: Story = {
  args: { label: 'Abstrak', defaultValue: SAMPLE },
};

export const Error: Story = {
  args: {
    label: 'Abstrak',
    error: 'Teks asli wajib diisi sebelum parafrase.',
  },
  play: async ({ canvas }) => {
    const field = canvas.getByLabelText('Abstrak');
    await expect(field).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText('Teks asli wajib diisi sebelum parafrase.')).toBeVisible();
  },
};

export const Disabled: Story = {
  args: { label: 'Abstrak', defaultValue: SAMPLE, disabled: true },
};

export const Typing: Story = {
  args: { label: 'Catatan' },
  play: async ({ canvas }) => {
    const field = canvas.getByLabelText<HTMLTextAreaElement>('Catatan');
    await userEvent.type(field, 'Halo dunia');
    await expect(field).toHaveValue('Halo dunia');
  },
};
