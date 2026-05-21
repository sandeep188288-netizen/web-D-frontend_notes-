// if-else

// let age = 32;
// if(age >= 18)
// {
//     console.log("Eligible to vote");
// }
// else
// {
//     console.log("Not Eligible to vote");

// }

// if else if else
//     let age = 9;
// if(age < 18){
//     console.log("KID");

// }
// else if(age > 45){
//     console.log("OLD");
// }
// else{
//     console.log("young");
// }

// multiple condition : switch
/*
// switch(new Date().getDay())
let num = 4;
switch(num)
{
    case 0:
        console.log("SUNDAY");
        break;

    case 1:
        console.log("MONDAY");
        break;
      
    case 2:
        console.log("TUESDAY");
        break; 
        
    case 3:
        console.log("WEDNESDAY");
        break;

    case 4:
        console.log("THURSDAY");
        break;

    case 5:
        console.log("FRIDAY");
        break;

    case 6:
        console.log("SATURDAY");
        break;

    defauit:
        console.log("NOT A VALID DAY! ")
}

*/

// for loop
// for(let i = 0; i < 6; i++){
//     console.log("hello bhai")
// }

// nested for loop
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         // console.log(i);
//         process.stdout.write(j+" ")
//     }
//     console.log();   // move to the next line
// }

//--------------------------------------------------
/*
greet();        // can be called 
function greet(){
    console.log("hello greet");
}

meet();             // error
const meet = function(){
    console.log("hello meet");
}

// global scope -> { anything inside curly bracket }
// function scope -> outside curly bracket
// blocke scope -> if{} , else {}

    */

// while loop
/*
let i = 1;
while(i<6){
    console.log(i);
    i++;
}

const obj = {
    name: "sandeep",
    amount: 4378,
    age: 24,
    city: "maihar"
};
const a = Object.values(obj);
console.log(a);     // [ 'sandeep', 4378, 24, 'maihar' ]

const b = Object.keys(obj);
console.log(b);     // [ 'name', 'amount', 'age', 'city' ]

for(let i = 0; i < b.length; i++){
    console.log(obj[b[i]]);
}
*/


// for in loop , I can iterate over the keys in an object

// let obj = {
//     name: "sandeep",
//     amount: 4378,
//     age: 24,
//     city: "maihar"  

// };
// for(let key in obj)
// {
//     console.log(key);    

// }   
// console.log(Object.keys(obj));

// let obj2 = Object.create(obj);
// obj2.money = 420;
// obj2.id = "rahul";
// // console.log(obj2.name);  
// console.log(Object.keys(obj2));
// for(let key in obj2)
// {
//     console.log(key);

// }

let obj = {};
obj.name = "sandeep";

// key value writable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// writable = true -> value ko mai change kar sakta hu
// configurable = true -> writable aur enumerable ki value ko change kar skta hu
// enumerable = true -> 

let obj1 = {};
Object.defineProperty(obj1, "name", {
    value: "sandeep",
    writable: false,
    enumerable: true,
    configurable: true
});
obj1.name = "rohan";
console.log(obj1);          //{ name: 'sandeep' }


// ------------------------------
/*
const obj2 = {
    name: "sandeep",
    amount: 4378,
    account_number: 123456789,
    age: 24,
    city: "maihar"
};
Object.defineProperty(obj2, "account_number", {
    writable: false,        // account number koi change na karr sake in future kabhi bhi
})

obj2.account_number = 272398756;
console.log(obj2.account_number);     // 123456789
*/

//-------------------------------

const customer1 = {
    name: "sandeep",
    amount: 4378,
    account_number: 123456789,
    age: 24
};

let customer2 = Object.create(customer1);
customer2.cit = "bhopal";
customer2.place = "ayodhya bypass";

Object.defineProperty(customer1, "name",{     // freeze karne ke baad koi bhi property change nahi kar sakta hu
enumerable: false,
})

// enumerable: jis bhi key ka enumeraable true hoga, unn sabka access hoha ya print hoga
// inherit hoke bhi koi bhi property or key aati hai, uska enumerable true hua to wo bhi print hoga

for(let key in customer1){
    console.log(key);    
}

console.log(Object.getOwnPropertyDescriptor(customer1, "name"));

//-----------------------------------------------------------

// for in loop -> array ke sath nahi lete kyuki kuch bhi array k bahrr lenge to array me reflect krega jaise arr.name 
// array is an object

const arr = [10,20,30,40,50];
arr.name = "sandeep";
for(let key in arr){
    // console.log(key);
   process.stdout.write(key+" ");  // 0 1 2 3 4 name     
}
// so use normal loop for array
for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}

//------------------------------------------------

Object.defineProperty(Object.prototype, "toString" , {
    enumerable: true,
})
for(let key in customer1){
    console.log(key);
}

