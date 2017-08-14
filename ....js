var arr=["hello","world"];
console.log(...arr);
function foo(fruit,drink,...food) {
    console.log(fruit,drink,...food)
}
foo("apple","tea","rice","meet");
var arr2=[];
arr2["name"]="zhaiyu";
arr2["age"]=18;
console.log(arr2);
// for(var key in arr2){
//     console.log(key);
// }
var obj={"age":12,"name":"zhaiyu"};
console.log(Object.keys(obj));
