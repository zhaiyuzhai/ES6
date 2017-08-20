// 遍历多维数组
var arr=[1,2,3,[4,[5,[6]]]];
Array.prototype.each=function (fn) {
    try{
        this.i||(this.i=0);
        if(this.length>0&&fn.constructor===Function){
            while(this.i<this.length){
                var e=this[this.i];
                if(e&&e.constructor===Array){
                    e.each(fn);
                    // arguments.callee(fn)没有传入e

                }
                else{
                    fn.call(e,e);
                }
                this.i++;
            }
            this.i=null;
        }
    }
    catch (ex){
        throw new Error("ERROR");
    }
    // 返回原数组
    return this
}
arr.each(function (item) {
    console.log(item);
})