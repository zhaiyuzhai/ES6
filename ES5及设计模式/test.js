function pro() {
    var a=10;
    this.show=function () {
        console.log(arguments);
        console.log(a);
    }
    this.add=function () {
        a++;
    }
    console.log(a);
}
// var child=new pro();
// child.add();
// child.show();
// pro();
var child={};
pro.call(child);
console.log(child)
