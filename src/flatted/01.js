import {parse, stringify, toJSON, fromJSON} from 'flatted';

const obj = {
    a: 1,
    b: [2, 3],
    c: {
        c: [1, 2, 3, 4],
        d: [
            {
                a: 111
            }
        ]
    },
    "api": {
        "config": {},
        "list": {
            "configData": {
                "url": "/shared-data/configuration/get-config-data",
                "method": "get",
                "config": {},
                "description": "获取全局配置"
            }
        }
    }
};
const str = stringify(obj); // '{"a":1,"b":[2,3]}'
console.log(JSON.stringify(JSON.parse(str), null, 2));
// const obj2 = parse(str); // { a: 1, b: [ 2, 3 ] }
// console.log(obj2);

