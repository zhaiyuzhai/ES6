function add(a,b=1) {
    return a+b;
}
console.log(add.length)
let add1=(a,b=1)=>a+b;
console.log(add1(1));
// 函数解构对象
var json={
    a:'web',
    b:'js'
}
function fun({a,b='mo'}) {
    return a+b;
}
console.log(fun(json));
// 函数的数组解构
let arr2=['html','happy'];
console.log(...arr2);
// 判断对象空位的用法
let obj={
    a:'技术',
    b:'能力'
}
console.log("a" in obj);
console.log(0 in arr2)