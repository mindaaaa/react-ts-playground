export default function tokenize(expr: string): (number | string)[] {
  const token: (number | string)[] = [];
  let lan: string = '';
  const split: string[] = expr.split('');
  for (const char of split) {
    if ('/*-+'.includes(char)) {
      token.push(...[Number(lan), char]); // lan은 Number가 되지만 lan 자체는 string이다.
      lan = '';
    } else {
      lan += char;
    }
  }

  token.push(Number(lan));
  return token;
}
