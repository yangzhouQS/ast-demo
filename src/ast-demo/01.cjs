const babel = require('@babel/core');
const generator = require('@babel/generator');

const code = `function square(n) {
  return n * n;
}`;

const ast = babel.parseSync(code);

const result = generator(ast, { comments: true }, code);

console.log(result.code);