import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { WebTopbar } from './WebTopbar';
import { Button } from '../Button';

const meta = {
  title: 'Organisms/Web Topbar',
  component: WebTopbar,
  tags: ['ai-generated'],
  args: { title: 'Pengaturan', onBack: fn() },
  argTypes: { actions: { control: false } },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof WebTopbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    title: 'Langganan & tagihan',
    actions: <Button variant="primary" size="sm">Upgrade</Button>,
  },
};
