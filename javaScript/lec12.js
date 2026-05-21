// PROTOTYPE -> prefer notes
let user1 = {
    name: "sandeep",
    age:20
}

let user2 = {
    account: 20,
    money: 50
}

user2.__proto__ = user1;
// console.log(user2.name);

let arr = [12,24,45,56];
console.log(arr.__proto__ == Array.prototype);                 // true
console.log(arr.__proto__.__proto__ == Object.prototype);      // true
console.log(arr.__proto__.__proto__.__proto__ == null);        // true
//-----------------------------------------------------------------------------

//******* FUNCTION ******
function greet(){
    console.log("Hello guys");
    console.log("mast ho aap log");
    console.log("mai to mast hu");

}
greet();
//--------------------------------
function sum(num1, num2){
    console.log(num1+num2)
};
sum(4, 2);

//------------------------------
function mult(num1, num2){
    //console.log(num1*num2)
    return num1*num2;
}
// mult(4, 8)
console.log(mult(2,3))

//-----------------------------
const fun = function(){
    console.log("kaise ho");
    console.log("mai to badhiya hu");
    return "money"
}
console.log(fun())

//-----------------------------
// ARROW FUNCTION

const fun1 = ()=>{
    console.log("hello coder");
} 
fun1();

// const sum1 = (number1, number2)=>{
//     return number1+number2;
// }
// console.log(sum1(4,3));

const sum1 = (number1, number2)=> number1+number2;
console.log(sum1(4,3));

const cube = number => number*number*number;
console.log(cube(4));

//-----------------------------------

const add = function(...number){    // rest operator
    // for loop lGke sum nikal do
    console.log(number);
}
add(2,3,4);
add(4,32,2,1,13,1);
add(23,13,1,3);

//-------------------

const obj = {
    name:"sandeep",
    amount:3232,
    age:20,
    course:"btech"
}

function fun2({name, amount}){
    console.log(name,amount);

}
fun2(obj);
