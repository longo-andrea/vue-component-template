import add from './add'

test('Add two numbers', async () => {
  expect(add(5, 5)).toEqual(10)
})
