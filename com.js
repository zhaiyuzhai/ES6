"use strict";

var dessert = 1;
var drink = 2;
var eats = 3;
var food = {
    dessert: dessert,
    drink: drink,
    eats: eats,
    foo: function foo() {
        console.log(1);
    }
};
console.log(food);
var eat = {};
Object.assign(eat, food);
console.log(eat);
var eat1 = { fun: "play" };
Object.assign(eat1, food);
console.log(eat1);
//{ fun: 'play', dessert: 1, drink: 2, foo: [Function: foo] }
var eat1 = { fun: "play" };
var eat2 = Object.create(eat1);
console.log(eat2.fun);
