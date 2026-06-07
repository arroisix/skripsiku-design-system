import type { Meta, StoryObj } from '@storybook/react-vite';
import { EditorStatus, EditorStatusDivider, EditorStatusSegment } from './EditorStatus';

const meta = {
  component: EditorStatus,
  tags: ['ai-generated'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof EditorStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WordCount: Story = {
  render: () => (
    <EditorStatus>
      <span>1.240 kata · 6 halaman</span>
      <EditorStatusDivider />
      <EditorStatusSegment dot="success">PUEBI</EditorStatusSegment>
    </EditorStatus>
  ),
};

export const Saving: Story = {
  render: () => (
    <EditorStatus>
      <EditorStatusSegment dot="warning">Menyimpan…</EditorStatusSegment>
    </EditorStatus>
  ),
};

export const Saved: Story = {
  render: () => (
    <EditorStatus>
      <EditorStatusSegment dot="success">Tersimpan</EditorStatusSegment>
      <EditorStatusDivider />
      <span>Sinkron</span>
    </EditorStatus>
  ),
};
