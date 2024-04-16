

var tinyid = require('tinyid');

var generator = tinyid({
  wheel: 'abcdef1234',
  padding: 5
});

const a = generator.encode(463);
console.log(a);


