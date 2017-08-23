var single={
    attr:true,
    attr2:false
}
//闭包单体
var zy={}
zy.single=(function () {
    var a1=true;
    var a2=false;
    return {
        attr1:a1,
        attr2:a2
    }
})()
//惰性单体
var ex={}
ex.single=(function () {
    var a1=true;
    var a2=false;
    return {
        attr1:a1,
        attr2:a2
    }
})()
//分支单体
var te={}
var jug=false;
te.single=(function () {
    var obj1={}
    var obj2={}
    return jug?obj1:obj2;
})()