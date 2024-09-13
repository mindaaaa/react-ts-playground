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

// input:
// expr: [123,'+',24,'*',32], oper: {
//   '*': (a, b) => a * b,
//   '/': (a, b) => a / b,
// }
// output:
// 768
export function calOper(expr, oper) {
  const result = [];
  let operator = null;
  for (const token of expr) {
    if (token in oper) {
      operator = oper[token]; // 연산자면 가져오고
    } else if (operator) {
      // 두번째 연산자면 계산
      result[result.length - 1] = operator(result[result.length - 1], token);
      operator = null;
    } else {
      result.push(token); // 첫 번째 연산자면 result 배열에 삽입
    }
  }
  return result;
}

// input: [123,'+',24,'*',32]
// 연산자 우선순위를 정리해
// 1. [24,'*',32]
// 2. [123,'+',768]
// output: 891
export function calculate(tokens) {
  // [123,'+',24,'*',32]
  for (let i = 0; i < priority.length; i++) {
    // 우선순위 2회 들어감
    while (tokens.length > 1) {
      // tokens가 1일 때까지 동작
      const newToken = calOper(tokens, priority[i]);

      tokens = newToken;
      if (tokens.length === newToken.length) break; // 우선순위 연산 끝난 후 로직 나오기
    }
  }
  return tokens[0];
}
