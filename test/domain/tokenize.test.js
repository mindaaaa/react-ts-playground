import tokenize from '../../src/domain/tokenize';

describe('tokenize.js', () => {
  test('test', () => {
    const expression = '123+24*32';

    const result = tokenize(expression);

    expect(result).toStrictEqual([123, '+', 24, '*', 32]);
  });
  test('minda', () => {
    // given
    const a = 1;
    const b = 2;

    // when
    const result = a + b;

    // then
    expect(result).toBe(3);
    // 절대 이게 나오면 안된다!
    expect(result).not.toBe(42);
  });
});
