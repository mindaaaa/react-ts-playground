const priority = [
  {
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  },
  {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  },
];

export function calOper(expr, oper) {
  const result = [];
  let operator = null;
  for (const token of expr) {
    if (token in oper) {
      operator = oper[token];
    } else if (operator) {
      result[result.length - 1] = operator(result[result.length - 1], token);
      operator = null;
    } else {
      result.push(token);
    }
  }
  return result;
  // input:
  // expr: [24,*,32], oper: *
  // output:
  // 768
}

// token 배열에 영향 ... 원본 배열 바꿔가면서.
// 원본 배열에 영향을 주는 함수

// 4. 연산자를 처리하는 함수를 만든다.
export function calculate(tokens) {
  for (let i = 0; i < priority.length; i++) {
    while (tokens.length > 1) {
      const newToken = calOper(tokens, priority[i]);

      tokens = newToken;
    }
  }

  return tokens[0];
  // input: [123,+,24,*,32]
  // 연산자 우선순위를 정리해
  // 1. [24,*,32]
  // 2. [123,+,768]
  // output: 891
}
