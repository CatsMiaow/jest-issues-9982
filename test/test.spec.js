const { testFunc } = require('../app');

test('index.js', async () => {
  const foo = testFunc();

  expect(typeof foo).toBe('object');
});
