const Operator = {};

export default function tokenize(expr) {
  const num = [];
  const oper = [];

  const split = expr.split('');
  for (const char of split) {
    if ('/*-+'.includes(char)) {
      oper.push(char);
    } else {
      num.push(char);
    }
  }
  return { num, oper };
}
