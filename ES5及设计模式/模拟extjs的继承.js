// 继承一次父类的模板，继承一遍父类的原型对象
// extend(child,father);
function extend(child,father) {
    if(father.prototype.constructor===Object.prototype.constructor){
        father.prototype.constructor=father;
    }
    // 1、只继承父类的原型对象
    // 用一个空函数进行中转
    var F=new Function();//进行中转
    F.prototype=father.prototype;
    // console.log(father.prototype.constructor)
    child.prototype=new F();
    // console.log(child.prototype.constructor);
    child.prototype.constructor=child;
    child.superClass=father.prototype.constructor

}
var father=function (name) {
    this.name=name;
}
father.prototype={
    constructor:father,
    say:function () {
        console.log("hello")
    }
}
var child=function (age,name) {
    child.superClass.call(this,name)
    this.age=age;
}
extend(child,father);
// child.prototype.say=function () {
//     console.log(0)
// }
var son=new child(18,"zhaiyu");

son.say()