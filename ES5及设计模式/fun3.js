function sum(a,b) {
    return a+b;
}
function call(num1,num2) {
    return sum.call(this,num1,num2);
}
function apply(num1,num2) {
    return sum.apply(this,[num1,num2]);
}
console.log(call(2,4));
// call方法的简单模拟
function test(a,b) {
    return a+b;
}
function obj(x,y) {
    this.x=x;
    this.y=y;
}
var o=new obj(10,20);
o.test=test();
console.log(test.call(o,o.x,o.y));