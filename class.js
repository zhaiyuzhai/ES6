class foo{
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    toString(){
        return "("+this.x+","+this.y+")"
    }
}
var a=new foo("abc","def");
console.log(a.toString());
console.log(Object.keys(foo.prototype));//[]
//set ,get 方法
class Myclass{
    constructor(){}
    get prop(){
        return "getter"
    }
    set prop(value){
        return ("setter"+value);
    }
}
var instance=new Myclass();
console.log(instance.prop);
console.log(instance.prop='zhaiyu');
// class的静态方法
class foo2{
    fun2(){
        console.log(2);
    }
    static fun1(){
        console.log(1);
    }
}
var ins2=new foo2();
ins2.fun1();//not a function
ins2.fun2();