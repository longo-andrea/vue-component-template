import { mount } from '@vue/test-utils'
import ComponentA from './ComponentA.vue'

test('Mount component', async () => {
  const wrapper = mount(ComponentA)

  expect(wrapper.find('div').classes().includes('compomnentA')).toBeTruthy()
})