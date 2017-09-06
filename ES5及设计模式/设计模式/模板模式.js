//总的模板
function Interview() {

};
Interview.prototype.write=function () {
    console.log("write");
}
Interview.prototype.professor=function(){
    console.log("professor")
}
Interview.prototype.leader=function () {
    console.log("leader")
}
Interview.prototype.Hr=function () {
    console.log("hr")
}
Interview.prototype.waitNotice=function(){
    console.log("waitNotice")
}
//阿里的面试
function alibaba() {

}
alibaba.prototype=new Interview();
alibaba.prototype.write=function(){
    console.log("阿里笔试")
}
var ali=new alibaba();
ali.write();
