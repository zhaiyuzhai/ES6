// map
var obj={
    name:3
}
var map=new Map();
map.set(obj,"zhaiyu");
console.log(map);
console.log(map.get(obj))
// delete clear
// 同set差不多


// proxy
var json={
    add (val) {
        return val+100
    },
    name:'zhaiyu'
}
console.log(json.add(100));
let pro=new Proxy(json,{
    get:function (target,key,property) {
        console.log("come")
        console.log(target[key])
    },
    set:function (target,key,property,prev) {
        return target[key]=property
    }
})
pro.name="js";
pro.name