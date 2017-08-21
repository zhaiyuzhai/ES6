// 动态原型方法
function person(name,age) {
    this.name=name;
    this.age=age;
    if(typeof this.sayName !="function"){
        person.prototype.sayName=function () {
            console.log(this.name)
        }
    }
}
//稳妥构造函数
function person(name,age) {
    var obj=new Object();
    var name=name;
    obj.sayName=function () {
        console.log(name);
    }
    return obj;
}