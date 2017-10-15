//promise回调地狱
function step1(resolve,reject) {
    console.log(1)
    if(true){
        resolve("1ok")
    }
}
function step2(resolve,reject) {
    console.log(2)
    if(true){
        resolve("2ok")
    }
}
function step3(resolve,reject) {
    console.log(3)
    if(true){
        resolve("3ok")
    }
}
new Promise(step1).then(function (val) {
        console.log(2)
        return new Promise(step2)
}).then(
    function (val) {
        console.log(val)
        return new Promise(step3)
    }
)