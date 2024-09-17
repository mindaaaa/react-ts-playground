type PrimaryOpcode = '*' | '/';
type SecondaryOpcode = '+' | '-';
type Operator = (a: number, b: number) => number;
type Token = number | string;

type PrimaryOperator = {
  [key in PrimaryOpcode]: Operator;
};

type SecondaryOperator = {
  [key in SecondaryOpcode]: Operator;
};

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
  expr: Token[],
  oper: PrimaryOperator | SecondaryOperator
): Token[] {
  const result: Token[] = [];

  let operator: Operator | null = null;

  for (const token of expr) {
    if (isPrimaryOperator(oper)) {
      if (isPrimaryOpcode(token) && typeof token === 'string') {
        operator = oper[token];
      } else if (typeof token === 'number' && operator) {
        result[result.length - 1] = operator(result.at(-1) as number, token);
        operator = null;
      } else {
        result.push(token);
      }
    } else {
      if (isSecondaryOpcode(token) && typeof token === 'string') {
        operator = oper[token];
      } else if (typeof token === 'number' && operator) {
        // 사칙연산자의 우선순위가 낮은 연산자의 경우 null을 사용하지 않아도 됨
        result[result.length - 1] = operator(result.at(-1) as number, token);
      } else {
        result.push(token);
      }
    }
  }

  return result;
}

function isPrimaryOperator(
  oper: PrimaryOperator | SecondaryOperator
): oper is PrimaryOperator {
  return Reflect.has(oper, '*') || Reflect.has(oper, '/');
}

function isPrimaryOpcode(token: Token): token is PrimaryOpcode {
  return typeof token === 'string' && ['*', '/'].includes(token);
}

function isSecondaryOpcode(token: Token): token is SecondaryOpcode {
  return typeof token === 'string' && ['+', '-'].includes(token);
}

export function calculate(tokens: (number | string)[]): number {
  // for...of 쓰는 것을 추천함
  for (let i = 0; i < priority.length; i++) {
    while (tokens.length) {
      const newToken = calOper(tokens, priority[i]);

      if (tokens.length === newToken.length) break;
      tokens = newToken;
    }
  }

  if (typeof tokens[0] === 'number') {
    return tokens[0];
  }
  throw new Error('result cannot be string');
}
