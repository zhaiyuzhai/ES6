"use strict";

var dessert = 1;
var drink = 2;
var food = {
    dessert: dessert,
    drink: drink,
    foo: function foo() {
        console.log(1);
    }
};
console.log(food);
var eat = {};
Object.assign(eat, food);
console.log(eat);
