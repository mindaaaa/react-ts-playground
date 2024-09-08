// 3. 연산자 우선순위에 따라 계산한다.
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
  // 1. 배열 순차탐색
  // 2. 연산자를 만나면 계산 수행
  // 3. 연산자를 저장하고
  // input:
  // expr: [24,*,32], oper: *
  // output:
  // 768
}

// while문 순회
// 1이 될 때까지 순회
// token 배열에 영향 ... 원본 배열 바꿔가면서.
// 원본 배열에 영향을 주는 함수

// 4. 연산자를 처리하는 함수를 만든다.
export function calculate(tokens) {
  reduce(calOper, tokens);
  if (tokens.length === 1) {
  }
  // input: [123,+,24,*,32]
  // 연산자 우선순위를 정리해
  // 1. [24,*,32]
  // 2. [123,+,768]
  // output: 891
}
