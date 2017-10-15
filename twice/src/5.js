// json的数组格式
let json={
    '0':'js',
    '1':'css',
    '2':'html',
    length:3
}
//Array.from里面的内容必须是可以遍历的
let arr=Array.from(json);
console.log(arr)
// Array.of()
console.log(Array.of(1,2,3));
console.log(Array.of('[1,2,3]'));
console.log(Array.of('afas','fa'));
//find实例方法,查找值
let arr1=[1,2,3,4]
console.log(arr1.find(function (val,index,arr) {
    return val>2
}))
// 修改原数组
console.log(arr1.fill("web",1,3))
console.log(arr1.keys().next().value);
for(var item of arr1.keys()){
    console.log(item)
}
// arr1.entries()数组条目
for(let [index,item] of arr1.entries()){
    console.log(index);
    console.log(item);
}
var list=arr1.entries();
console.log(list.next().value);