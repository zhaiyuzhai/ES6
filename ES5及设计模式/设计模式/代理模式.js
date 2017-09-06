// var Myimg=(function () {
//     var img=document.createElement("img");
//     document.body.appendChild(img);
//     return function (src) {
//         img.src=src
//     }
// })();
// var proxy=(function () {
//     var img=new Image();
//     img.onload=function () {
//         Myimg(this.src)
//     }
//     return function (src) {
//         Myimg("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
//         img.src=src
//     }
// })();
// // proxy("http://true.jpg");
// console.log(Myimg);
// console.log(proxy)
// var img=new Image();
// img.onload=function(){
//     alert("img is loaded")
//     document.body.appendChild(img);
// };
// img.src="http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif";


/**
 * 代理模式可以用在图片的懒加载上面，当图片未加载出来的时候用一张图片代替；
 *
 *
 */
var myImage = (function(){
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return function(src){
        imgNode.src = src;
    }
})();

/**
 * myImage=function(src){
 *      imgNode.src=src;
 *
 * }
 */
// 代理模式
var ProxyImage = (function(){
    var img = new Image();
    console.log(1);
    img.onload = function(){
        console.log("img")
        myImage(this.src);
    };
    return function(src) {
        // 占位图片loading
        myImage("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
        // img.src这行代码执行后才会触发img.onload();
        // 注意火狐的浏览器机制和Chrome的机制不同。火狐的img.src包含在页面DOM的加载之内，但是img.src确是在DOM的加载之外进行的
        if(src){
            img.src=src;
        }
    }
})();
// 调用方式
ProxyImage();
// ProxyImage("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png");
// 真实要展示的图片