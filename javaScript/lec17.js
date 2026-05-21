/*

console.log(x);         //undefined
console.log(y);         //Cannot access  'y' before initialization
// console.log(z);      //'z' is not defined

var x = 10; 

let y = 20;    

// **** Hoisting ****------------------
// for hoisting declaration is moved to the top of the scope, but initialization is not moved.

c = 50
var a = undefined;
let b;

console.log(a);         //undefined                 
c = 50
// console.log(b);     //Cannot access 'b' before initialization
a = 100;
b = 200;
console.log(c);         //50

*/

// greet();
// function greet(){
//     console.log("Hello greeet");            //Hello greeet
// }

meet();     // nahi chalega agar greet aur meet dono function sath me chalaege to greet chalega but meet nahi chalega, isliye meet() last me declare karo
let meet = function(){
    console.log("Hello meet");
}
// meet();         // chalega

// Memory allocation:
//meet: function chla jaega last wale meet() me
//code execution phase: