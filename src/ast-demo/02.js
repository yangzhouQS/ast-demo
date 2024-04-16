import * as babelParser from '@babel/parser';
const code = 'const a = 1;';
const treeCode = babelParser.parse(code);


console.log(treeCode);
