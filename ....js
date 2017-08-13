var arr=["hello","world"];
console.log(...arr);
function foo(fruit,drink,...food) {
    console.log(fruit,drink,...food)
}
foo("apple","tea","rice","meet");