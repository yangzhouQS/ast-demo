const { Parser } = require('@florajs/sql-parser');
const parser = new Parser();
const ast = parser.parse('SELECT id as c_id,name as user_name FROM t');

console.log(JSON.stringify(ast, null, 2));
