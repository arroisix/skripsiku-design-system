import type { Meta, StoryObj } from '@storybook/react-vite';
import { IdeaCard } from './IdeaCard';

const meta = {
  component: IdeaCard,
  tags: ['ai-generated'],
  args: {
    children: '“Gen Z menghabiskan rata-rata 7,2 jam sehari di media sosial.”',
    source: 'Smith et al. (2023), hlm. 412',
  },
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 256 }}><Story /></div>],
} satisfies Meta<typeof IdeaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
