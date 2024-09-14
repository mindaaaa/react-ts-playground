type Operator = (a: number, b: number) => number;

interface PrimaryOperator {
  '*': Operator;
  '/': Operator;
}
interface SecondaryOperator {
  '+': Operator;
  '-': Operator;
}

const priority: [PrimaryOperator, SecondaryOperator] = [
  {
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  },
  {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
  },
];

export function calOper(
  expr: (number | string)[],
  oper: PrimaryOperator
): number[] {
  // oper 타입이 object[]가 아니래!!
  const result: number[] = [];
  let operator: Operator | null = null;
  for (const token of expr) {
    if (typeof token === 'string') {
      if (token in oper) {
        operator = oper[token]; // 연산자면 가져오고 // 타입 정의가... for...of 절이라 안됨 ㅠ
      }
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

export function calculate(tokens: (number | string)[]): number {
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
  if (typeof tokens[0] === 'number') {
    return tokens[0];
  } else {
    throw new Error('result cannot be string');
  }
}
