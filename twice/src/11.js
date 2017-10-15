// class类
class Coder{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    name(){
        console.log("zhaiyu")
    }
    add(){
        return this.a+this.b;
    }
}
var ins=new Coder(2,3);
console.log(ins);
class html extends Coder{};
var ins1=new html(3,4);
console.log(ins1.add())
