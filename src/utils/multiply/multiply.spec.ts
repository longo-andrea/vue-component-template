import multiply from './multiply'

test('Multiply two numbers', async () => {
  expect(multiply(5, 5)).toEqual(25)
})
