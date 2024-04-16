// import Parser for all databases
const { Parser } = require('node-sql-parser');
const parser = new Parser();
//const ast = parser.astify('/*+ tenant_code:crec4 */SELECT * FROM t where 1=1 and id > 0'); // mysql sql grammer parsed by default
const ast = parser.astify(

  `
  with /*! MAX_EXECUTION_TIME(1000) */  recursive  org_tree as(

    -- 顶级查询
    select id,parent_id,name,1 as level,concat(id,'') as full_id

    from global_platform.organization where id = 971365888684544
                                                                                                   union all
    select org.id,org.parent_id,org.name,tree.level+1,concat(tree.full_id,'|',org.id)
    from org_tree as tree join global_platform.organization as org
        on tree.id = org.parent_id
)
select * from org_tree;
  `
); // mysql sql grammer parsed by default

console.log(JSON.stringify(ast, null, 2));
