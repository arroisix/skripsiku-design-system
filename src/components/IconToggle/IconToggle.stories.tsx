import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconToggle } from './IconToggle';

/** Ruler glyph (bar + ticks) — drawn inline to match the Figma editor icon. */
const RulerGlyph = () => (
  <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
    <rect x="1" y="6" width="16" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4.75" y1="6" x2="4.75" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8.75" y1="6" x2="8.75" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12.75" y1="6" x2="12.75" y2="9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/** Sidebar glyph (panel + divider). */
const SidebarGlyph = () => (
  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
    <rect x="3" y="3" width="14" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.54" />
    <line x1="7.5" y1="5" x2="7.5" y2="15" stroke="currentColor" strokeWidth="1.54" />
  </svg>
);

const meta = {
  component: IconToggle,
  tags: ['ai-generated'],
  args: { icon: <RulerGlyph />, shape: 'round', 'aria-label': 'Penggaris' },
  argTypes: {
    shape: { control: 'inline-radio', options: ['square', 'round'] },
    icon: { control: false },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof IconToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RulerToggle: Story = { args: { defaultPressed: true } };
export const SidebarToggle: Story = { args: { icon: <SidebarGlyph />, shape: 'square', 'aria-label': 'Sidebar' } };

export const Toolbar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 4 }}>
      <IconToggle icon={<RulerGlyph />} shape="round" defaultPressed aria-label="Penggaris" />
      <IconToggle icon={<SidebarGlyph />} shape="round" aria-label="Sidebar" />
    </div>
  ),
};
