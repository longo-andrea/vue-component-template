import { mount } from '@vue/test-utils'
import ComponentB from './ComponentB.vue'

test('Mount component', async () => {
  const wrapper = mount(ComponentB, {
    props: {
      message: 'Hi',
    },
  })

  expect(wrapper.find('p').text()).toEqual('Your message is: Hi')
})
