const parser = require('js-sql-parser');
const ast = parser.parse('SELECT /*+ FIRST_ROWS(10) */ * FROM f_flow_task;');

console.log(JSON.stringify(ast, null, 2));

//ast.value.selectItems.value[0].value = 'foo';
//ast.value.from.value[0].value.value.value = 'bar';

console.log(parser.stringify(ast));
// SELECT foo FROM bar
