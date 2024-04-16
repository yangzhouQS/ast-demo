import {astVisitor, parse, parseFirst} from 'questdb-sql-ast-parser';

const tables = new Set();
let joins = 0;
const visitor = astVisitor(map => ({

  // implement here AST parts you want to hook

  tableRef: t => tables.add(t.name),
  join: t => {
    joins++;
    // call the default implementation of 'join'
    // this will ensure that the subtree is also traversed.
    map.super().join(t);
  }
}))

// start traversing a statement
visitor.statement(parseFirst(`select * from ta left join tb on ta.id=tb.id`));

// print result
console.log(`Used tables ${[...tables].join(', ')} with ${joins} joins !`)
