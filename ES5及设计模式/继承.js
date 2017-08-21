// 原型继承
var a=function (name) {
    this.name=name
}
a.prototype={
    constructor:a,
    say:function () {
        console.log(this.name)
    }
}
var b=function (age) {
    this.age=age;
}
b.prototype=new a("zhangsan");
var c=new b();
c.say();
// 类继承（借用构造函数的方法）
var x=function (name) {
    this.name=name
}
x.prototype={
    constructor:a,
    say:function () {
        console.log(this.name)
    }
}
var y=function (age,name) {
    this.age=age;
    x(name).call(this)
}
// 混合继承方式
var u=function (name) {
    this.name=name
}
u.prototype={
    constructor:u,
    say:function () {
        console.log(this.name)
    }
}
var v=function (age,name) {
    this.age=age;
    x(name).call(this)
}
v.prototype=new u();
// console.log(v.prototype.constructor);