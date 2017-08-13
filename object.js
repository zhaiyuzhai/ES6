var dessert=1;
var drink=2;
let food={
    dessert,
    drink,
    foo(){
        console.log(1);
    }
}
console.log(food);
var eat={};
Object.assign(eat,food);
console.log(eat)