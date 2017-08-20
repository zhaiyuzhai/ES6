function test(a,b,c,d) {
    console.log(test.length);
    console.log(arguments.length);
    if(test.length===arguments.length){
        return a+b;
        arguments.callee
    }
}
// test();
function fact(num) {
    if(num<1){return 1}
    else{
        return num*arguments.callee(num-1);
    }
}
// var f=fact;
// fact=null;
// console.log(f(3))
console.log(fact(3));