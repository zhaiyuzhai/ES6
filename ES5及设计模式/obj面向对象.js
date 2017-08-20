// 工厂模式
function father(name,age) {
    var obj={}
    obj.name=name;
    obj.age=age;
    return obj
}
var obj1=father("zy",19);
//构造函数
function Person(name,age) {
    this.name=name;
    this.age=age;
}
var obj2=new Person("gs",22)
// 对象的属性
console.log(obj2.constructor);