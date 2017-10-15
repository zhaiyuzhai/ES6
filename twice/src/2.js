// 对象扩展运算符(rest运算符)
function zy(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
zy(1,2,3);
// 解决了应用类型的赋值问题
 var arr=['1','2','3'];
var arr1=[...arr];
arr1.push(4);
console.log(arr);
console.log(arr1);
function js(first,...arg) {
    console.log(arg.length);
}
js(1,2,3,5,6,6);
//...相当于是将数组转化成加了逗号的值列表