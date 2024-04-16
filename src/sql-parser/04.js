import { toSql, parseFirst, astMapper } from 'questdb-sql-ast-parser';

// create a mapper
const mapper = astMapper(map => ({
  tableRef: t => {
    if (t.name === 'foo') {
      return {
        // Dont do that... see below
        // (I wrote this like that for the sake of explainability)
        ...t,
        name: 'bar',
      }
    }

    // call the default implementation of 'tableRef'
    // this will ensure that the subtree is also traversed.
    return map.super().tableRef(t);
  }
}))
// parse + map + reconvert to sql
const modified = mapper.statement(parseFirst('select/*+ BNL(t2) */ * from foo'));

console.log(toSql.statement(modified)); //  =>  SELECT * FROM "bar"
