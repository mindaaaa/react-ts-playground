import { calOper, calculate } from '../../src/domain/calculate';

describe.skip('calculate.js', () => {
  test('test', () => {
    // given
    const expr = [24, '*', 32];
    const oper = {
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    // when
    const result = calOper(expr, oper);

    // then
    expect(result).toEqual([768]);
  });
});

describe('calculate.js', () => {
  test('test', () => {
    // given
    const input = [123, '+', 24, '*', 32];

    // when
    const result = calculate(input);
    // then
    expect(result).toBe(891);
  });
});
