const add = (a, b) => a + b;

test('shoul add two values', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
