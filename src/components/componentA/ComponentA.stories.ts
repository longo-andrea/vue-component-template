import type { Meta, StoryObj } from '@storybook/vue3';
import ComponentA from './ComponentA.vue';

const meta = {
  title: 'Components/ComponentA',
  component: ComponentA,
  render: (args: any) => ({
    components: { ComponentA },
    setup() {
      return { args };
    },
    template: '<ComponentA :message=args.message>Hello</ComponentA>',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMessage: Story = {
  args: {
    message: 'My custom message',
  },
};

export const WithoutMessage: Story = {
    args: {}
};
