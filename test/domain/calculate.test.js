import { calOper, calculate } from '../../src/domain/calculate';

describe.skip('calculate.js', () => {
  test('test', () => {
    // 123+24*32
    const input = {
      num: ['1', '2', '3', '2', '4', '3', '2'],
      oper: ['+', '*'],
    };
    //caloper
    //1. 24*32
    //2. 123+result
    const result = calOper(input);

    expect(result).toStrictEqual(['123', '+', '24', '*', '32']);
  });
});
