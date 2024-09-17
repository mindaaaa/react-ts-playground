const OPCODE = '/*-+';

const convertToNumber = (_arr: string[]) => Number(_arr.splice(0).join(''));

export default function tokenize(expr: string): (number | string)[] {
  const token: (number | string)[] = [];
  const numbers: string[] = [];
  for (const char of expr.split('')) {
    if (OPCODE.includes(char)) {
      const number = convertToNumber(numbers);
      token.push(...[number, char]); // lan은 Number가 되지만 lan 자체는 string이다.
    } else {
      numbers.push(char);
    }
  }
  token.push(convertToNumber(numbers));

  return token;
}
