//条件判断太多的话可以使用
function vip() {
    this.discount=0.5;
}
vip.prototype.getPrice=function (price) {
    return this.discount*price;
}
function pur() {
    this.discount=1;
}
pur.prototype.getPrice=function (price) {
    return this.discount*price;
}
function person() {
    
}
person.prototype.set=function (name,type,price) {
    this.name=name;
    this.type=type;
    this.price=price;
}
person.prototype.res=function () {
    return this.name+this.type.getPrice(this.price)
}
var girl=new person();
var vip1=new vip();
girl.set("gs",vip1,200);
console.log(girl.res())