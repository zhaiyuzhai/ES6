function dog() {
    this.eat=function () {
        console.log("eat")
        return this
    }
    this.run=function () {
        console.log("run")
        return this
    }
    this.stop=function () {
        console.log("stop")
        return this
    }
}
var dog1=new dog();
// dog1.eat().run().stop()

//模拟jQuery底层
(function (window,undefined) {
    var _$=function (selector) {
        var reg=/\w+/;
        // alert(reg.test(selector))
        if(reg.test(selector)){
            var a=document.getElementById(selector);
            this.dom=document.getElementById(selector)
            alert(a);
        }

    }
    Function.prototype.method=function (methodsname,fn) {
        this.prototype[methodsname]=fn;
        return this;
    }
    // _$.prototype.add=function () {
    //     console.log(2);
    //     return this
    // }
    // _$.prototype.red=function () {
    //     console.log(3);
    //     return this
    // }
    window.$=_$;
    _$.onready=function (fn) {
        window.$=function(selector){
            return new _$(selector)
        }
        _$.method('add',function () {
            console.log(2);return this
        }).method('red',function () {
            console.log(3);
            return this
        })
        fn();
    }
})(window);
$.onready(function () {
    // console.log(1)
    // $("#app").add().red()
    $("app");
    alert($("app").dom)
});
// console.log($)