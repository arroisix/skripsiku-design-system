import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CitationChip } from './CitationChip';

const meta = {
  component: CitationChip,
  tags: ['ai-generated'],
  args: { children: '(Putri, 2024)' },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof CitationChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {};

export const Clickable: Story = {
  args: { onClick: fn() },
};

export const InProse: Story = {
  render: () => (
    <p style={{ maxWidth: 420, fontFamily: 'var(--font-sans)', color: 'var(--color-text)', lineHeight: 1.7 }}>
      Pengembangan pariwisata desa terbukti meningkatkan kesejahteraan komunitas{' '}
      <CitationChip>(Putri, 2024)</CitationChip> dan memperkuat ekonomi lokal{' '}
      <CitationChip>(Santoso & Dewi, 2023)</CitationChip>.
    </p>
  ),
};
