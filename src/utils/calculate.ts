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
        if (token in oper) {
          operator = oper[token];
        }
      } else if (typeof token === 'number' && operator) {
        result[result.length - 1] = operator(result.at(-1) as number, token);
      } else {
        result.push(token);
      }
    } else {
      if (isSecondaryOpcode(token) && typeof token === 'string') {
        if (token in oper) {
          operator = oper[token];
        }
      } else if (typeof token === 'number' && operator) {
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
  const validOpcodes = ['*', '/'];

  return typeof token === 'string' && validOpcodes.includes(token);
}

function isSecondaryOpcode(token: Token): token is SecondaryOpcode {
  const validOpcodes = ['+', '-'];

  return typeof token === 'string' && validOpcodes.includes(token);
}

export function calculate(tokens: (number | string)[]): number {
  for (let i = 0; i < priority.length; i++) {
    while (tokens.length > 1) {
      const newToken = calOper(tokens, priority[i]);

      tokens = newToken;
      if (tokens.length === newToken.length) break;
    }
  }
  if (typeof tokens[0] === 'number') {
    return tokens[0];
  } else {
    throw new Error('result cannot be string');
  }
}
