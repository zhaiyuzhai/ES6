console.log(Array.from(Array(100).keys()));
// console.log(Array(100).length);
var arr=Array(100);
console.log(arr)
//*****************
var Conf=(function () {
    var conf={
        MAX_NUM:1000,
        MIN_NUM:100,
        COUNT:10
    }
    return{
        get:function (name) {
            return conf[name]?conf[name]:null;
        }
    }
})();
var count=Conf.get("COUNT");
console.log(count);