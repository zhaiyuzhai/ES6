function Map() {
    var obj={}
    this.put=function (key,value) {
        obj[key]=value;
    }
    this.size=function () {
        var count;
        for(var attr in obj){
            count++;
        }
    }
}
var m=new Map();
m.put("1","a");