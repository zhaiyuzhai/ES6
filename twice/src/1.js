var a="技术胖";
{ var a="zhaiyu"}
console.log(a);
for(let i=0;i<3;i++){
    console.log(i);
}
//报错！！！
// console.log(i);
//解构赋值
//     let a=1;
//     let b=2;
//     let c=3;
// 数组的解构按顺序来
let [d,b,c]=[1,2,3];
console.log(d);
console.log(b);
console.log(c);
//默认值
let [foo=true]=[false];
console.log(foo);
//undefined，null
let [foo1,foo2="yes"]=["no",undefined]
console.log(foo1+foo2)
//对象的解构，对象名称必须相同(按名称来解构)
var {boo1,boo}={boo:2,boo1:4};
console.log(boo);
console.log(boo1);
// 倘若事先声明一个变量的话，再对象解构需要加（）
var boo2;
({boo2}={boo2:5})
console.log(boo2)
// console.log(boo3)
// 字符串的解构
const [x,y,z]="abc";
console.log(x,"y",'z');