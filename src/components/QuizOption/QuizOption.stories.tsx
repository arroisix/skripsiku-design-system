import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QuizOption } from './QuizOption';

const meta = {
  component: QuizOption,
  tags: ['ai-generated'],
  args: { control: 'radio', children: 'Opsi jawaban', selected: false },
  argTypes: { control: { control: 'inline-radio', options: ['checkbox', 'radio'] } },
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ maxWidth: 640 }}><Story /></div>],
} satisfies Meta<typeof QuizOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio: Story = { args: { selected: true } };
export const Checkbox: Story = { args: { control: 'checkbox', selected: true } };

export const SingleChoice: Story = {
  render: () => {
    const [picked, setPicked] = useState('b');
    const opts = [
      { v: 'a', t: 'Karena tekanan akademik yang berlebihan' },
      { v: 'b', t: 'Karena kurangnya dukungan sosial' },
      { v: 'c', t: 'Karena ekspektasi keluarga yang tinggi' },
    ];
    return (
      <div style={{ display: 'grid', gap: 8, maxWidth: 640 }}>
        {opts.map((o) => (
          <QuizOption key={o.v} selected={picked === o.v} onClick={() => setPicked(o.v)}>
            {o.t}
          </QuizOption>
        ))}
      </div>
    );
  },
};
