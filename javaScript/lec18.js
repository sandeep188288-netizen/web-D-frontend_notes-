// console.log("hello world");
// console.log(Math.random());

// console.log(global);

// globalThis = global object ko point krta hai irrespective of environment
// console.log(globalThis);        // use this
// console.log(globalThis.Math.random());

// let, const : part of global scope
// var : part of global object

// var a = 10;
// let b = 20;
// const c =  30;
// console.log(this.c)

/*

// non-strict mode
a = 10;
console.log(a);

//strict mode
"use strict";       
let b = 20;    
console.log(b);   

// this inside a method
const obj = {
    name : "john",
    age : 30,
    greet: function() {
        console.log(this.name);     // this points to object 
    }
}
obj.greet();    // this will refer to the object itself

*/

// function meet(){
//     console.log(this);   
// }
// meet(); 
// window.meet();     // this points to window

//------------------------------------------------------

// this inside a Constructor or class
// in constructor or classes, this refers to the instance of the object being created
class Person{
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
}

let a = new Person("sandeep", 30);
console.log(a);     