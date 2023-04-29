import type { Meta, StoryObj } from '@storybook/vue3';
import ComponentB from './ComponentB.vue';

const meta = {
  title: 'Components/ComponentB',
  component: ComponentB,
  render: (args: any) => ({
    components: { ComponentB },
    setup() {
      return { args };
    },
    template: '<ComponentB :message=args.message></ComponentB>',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMessage: Story = {
  args: {
    message: 'My custom message',
  },
};
