const fs = require('fs')
const {parse} = require('@babel/parser')
const traverse = require('@babel/traverse').default
const t = require('@babel/types')
const generate = require('@babel/generator').default

/*const code = fs.readFileSync('test.js', {
    encoding: 'utf8',
})*/
const data = {
    defaultSlot: {
        "__nodeId": "elementRender_ltwonyll",
        "__nodeName": "elementRender",
        "__nodeType": "renderNode",
        "__nodeOptions": {
        },
        "__nodeKey": "nodeKey_elementRender_ltwonyll",
        "__description": ""
    },
    userList: [
        {id: 0, user: '1000'},
        {id: 1, user: '1001'},
        /*{id: 2, user: '1002'},
        {id: 3, user: '1003'},
        {id: 4, user: '1004'},*/
    ],
    a: 1,
    b: 2,
    c: {
        nodeId: '1111',
        nodeName: '2222Name',
        options: {
            a: '1',
            b: 2
        }
    },

}
const code = JSON.stringify(data)

const ast = parse(`
const JSON = ${code}
`)

let imported = false
// 对 ast 进行深度遍历
traverse(ast, {
    // 当遍历到 import 语句相关的节点会执行这个方法
    ImportDeclaration(path) {
        const prevNode = path.getPrevSibling().node
        // 判断当前这个 import 语句是不是第一个
        if ((!prevNode || prevNode.type !== 'ImportDeclaration') && !imported) {
            // 需要插入的节点
            const node = t.importDeclaration(
                [t.importDefaultSpecifier(t.identifier('A'))],
                t.stringLiteral('a')
            )
            path.insertBefore(node)
            imported = true
        }
    },
    enter(nodePath) {
        let node = nodePath.node;
        let scope = nodePath.scope;
        
        console.log(scope);
        console.log(node);
        // 进入节点
        if (nodePath.node.type === "ThisExpression") {
            // 对所有的操作
        }
        
    },
    exit(path) {
        // 退出节点
        // console.log(`  exit ${path.type}(${path.key})`)
        
    }
})
generate(ast).code
// console.log(generate(ast).code)

// console.log(code);