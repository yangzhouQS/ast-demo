
const obj = {
  a:1,
  fn:function(){
    console.log(this)
  }
}
console.log(obj.fn.toString());
