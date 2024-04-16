import {parse, stringify, toJSON, fromJSON} from 'flatted';

const data = {
  a: 1,
  b: 21,
  fn: function () {
    console.log('123');
  }
}

// console.log(fromJSON(data));

// The object
var obj = {
  a: 5,
  b: function (param) {
    return param;
  }
};

// Convert to JSON using a replacer function to output
// the string version of a function with /Function(
// in front and )/ at the end.
var json = JSON.stringify(obj, function(key, value) {
  console.log(key);
  return value;
});
console.log(json);


const fn = async () => {
  console.log('123');
}

console.log(typeof fn);
