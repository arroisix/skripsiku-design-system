import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PathOption } from './PathOption';
import { IconCloudUpload, IconSparkles } from '../../icons';

const meta = {
  component: PathOption,
  tags: ['ai-generated'],
  args: {
    icon: <IconCloudUpload />,
    title: 'Udah ada draft, mau lanjutin',
    children: 'Upload .docx / .pdf, aku parse jadi format Skripsiku lengkap dengan outline.',
  },
  argTypes: { icon: { control: false } },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 680 }}><Story /></div>],
} satisfies Meta<typeof PathOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };

export const Group: Story = {
  render: () => {
    const [pick, setPick] = useState('draft');
    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 680 }}>
        <PathOption icon={<IconCloudUpload />} title="Udah ada draft, mau lanjutin" selected={pick === 'draft'} onClick={() => setPick('draft')}>
          Upload .docx / .pdf, aku parse jadi format Skripsiku.
        </PathOption>
        <PathOption icon={<IconSparkles />} title="Mulai dari nol" selected={pick === 'new'} onClick={() => setPick('new')}>
          Aku bantu susun outline dari topik & rumusan masalahmu.
        </PathOption>
      </div>
    );
  },
};
