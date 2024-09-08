import tokenize from '../../src/domain/tokenize';

describe('tokenize.js', () => {
  test('test', () => {
    const expression = '123+24*32';

    const result = tokenize(expression);

    expect(result).toStrictEqual({
      num: ['1', '2', '3', '2', '4', '3', '2'],
      oper: ['+', '*'],
    });
  });
});
