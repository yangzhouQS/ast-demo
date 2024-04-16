//const { parse, deparse } = require('pgsql-parser');

//const stmts = parse('SELECT * FROM test_table');
//
//stmts[0].RawStmt.stmt.SelectStmt.fromClause[0].RangeVar.relname = 'another_table';
//
//console.log(deparse(stmts));

// SELECT * FROM "another_table"

import * as x from 'pgsql-parser';

