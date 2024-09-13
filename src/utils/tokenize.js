const Operator = {};

export default function tokenize(expr) {
  const token = [];
  let lan = '';
  const split = expr.split('');
  for (const char of split) {
    if ('/*-+'.includes(char)) {
      token.push(...[Number(lan), char]);
      lan = '';
    } else {
      lan += char;
    }
  }

  token.push(Number(lan));
  return token;
}
