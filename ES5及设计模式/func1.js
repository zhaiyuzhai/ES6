function test(aa) {
    aa();
}
function test1() {
    console.log("执行了")
}
test(test1);