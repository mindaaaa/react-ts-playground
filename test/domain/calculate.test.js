import { calOper, calculate } from '../../src/domain/calculate';

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
