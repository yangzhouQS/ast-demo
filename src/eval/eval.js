const evaluate = require('static-eval');
const parse = require('esprima').parse;

//var src = process.argv[2];
let inputStr = '1+4';

inputStr = "[1, 1+1, 2+4]";

const ast = parse(inputStr).body[0].expression;

console.log(evaluate(ast));
