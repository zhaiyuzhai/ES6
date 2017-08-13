// 函数支持默认值
function foo(food="bread",drink="tea") {
    return food+drink;
}
console.log(foo("rice","coffee"));
// 解构对象
function eat(a1,a2,{a3,a4}={}) {
    console.log(a1, a2, a3, a4);
}
eat(1,2,{a3:3,a4:4});
//函数的name属性
function fooo() {
    
}
console.log(fooo.name)