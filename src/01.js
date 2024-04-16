const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;


const path = require('path');

// const jsCode = fs.readdirSync('./demo.js',{encoding:'utf-8'});
const jsCode = `let a= 100;\n // 测试函数\n function fn(a,b){console.log(a,b)}`
const ast = parser.parse(jsCode);

let visitor = {
    FunctionExpression:function (path){
        console.log(path);
        console.log('hello');
    },

    enter(path){
        console.log(path);
    },
    exit(path){

        console.log(path);
    }
}

// 遍历ast
traverse(ast, visitor)

// 代码生成
let code = generator(ast, {
    retainLines: false,
    comments: true,
    compact: false,
}).code
console.log(code);

fs.writeFile('./newDemo.js', code, (err) => {

})
