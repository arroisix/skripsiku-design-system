import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatBubble } from './ChatBubble';

const meta = {
  component: ChatBubble,
  tags: ['ai-generated'],
  args: { role: 'ai', children: 'Aku bisa bantu rangkum Bab 2 atau bikin pertanyaan latihan sidang. Mau mulai dari mana?' },
  argTypes: { role: { control: 'inline-radio', options: ['ai', 'user'] } },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ai: Story = {};
export const User: Story = { args: { role: 'user', children: 'Tolong bikin 5 pertanyaan sidang dari Bab 2 ya' } };

export const Conversation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      <ChatBubble role="ai">Halo! Mau aku bantu apa hari ini?</ChatBubble>
      <ChatBubble role="user">Tolong bikin 5 pertanyaan sidang dari Bab 2 ya</ChatBubble>
      <ChatBubble role="ai">Siap. Aku susun dari rumusan masalah dan temuan utamamu, ya.</ChatBubble>
    </div>
  ),
};
