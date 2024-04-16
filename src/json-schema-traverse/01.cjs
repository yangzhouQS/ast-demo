const traverse = require("json-schema-traverse");

const schema = {
    id: 1,
    type: "object",
    b: {
        id: 2,
        foo: {bb: "string"},
        bar: {bbb: "number"},
        c: {
            cc: 666
        }
    },
};


traverse(schema, {allKeys: true}, (sch, jsonPtr, _, parentJsonPtr) => {
    // console.log(sch);
    console.log('--------start---------');
    console.log(sch);
    console.log(parentJsonPtr);
    console.log('--------end---------');
})
