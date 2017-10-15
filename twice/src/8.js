let f=Symbol();
console.log(typeof f);
let f1=Symbol('zhaiyu');
console.log(f1);
let obj={
    [f1]:"js"
}
console.log(obj[f1])
//Symbol表示描述类型，不可被枚举


//set是一种数据结构
// 去重
let setArr=new Set(['js','css','html']);
console.log(setArr);

setArr.add("web")

console.log(setArr);

console.log(setArr.has('js'));
console.log(setArr.delete("css"));
console.log(setArr);
// for    of
setArr.forEach((val)=>console.log(val));
console.log(setArr.size)
// WeakSet
