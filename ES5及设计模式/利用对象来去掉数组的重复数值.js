var arr=[1,2,3,4,4,2,5,6,1];
// 把数组转成对象，对象的键值唯一！
function toObj(arr) {
    var obj={};
    for(var i=0,j=arr.length;i<j;i++){
        obj[arr[i]]=true;
    }
    // console.log(obj)
    return obj;
}
// 把对象转成数组
function keys(obj) {
    var arr=[];
    for(var attr in obj){
        //遍历所有可枚举的属性
        if(obj.hasOwnProperty(attr)){
            arr.push(attr);
        }
    }
    return arr;
}
var newarr=keys(toObj(arr));
console.log(newarr)
/*雅虎yui的底层代码*/