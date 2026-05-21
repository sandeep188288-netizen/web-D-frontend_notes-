// for of loop

// const arr = [1,2,3,4,5];

// for(let value of arr)
// {
//     console.log(value);
// }

// let str = "sandeep is a good boy";
// for(let value of str)
// {
//     console.log(value);
// }

// // don't use for of loop on object -> as object is not iterable




// // ****** call back functoin -> ek function banao aur ussme dusra function as an argument bhej do 

// function name(fun){
//     console.log("hello world");
//     fun();
// }

// function greet(){
//     console.log("hello greet");
// }

// name(function greet(){
//     console.log("hello greet");
// });
//--------------------------------------------

// function fetchData(){
//     // bahut sara
//     console.log("I am fetching data");
// }
// setInterval(fetchData, 2000);   // after every 2 seconds fetchData function will be called

//**** forEach -> kuch bhi return nahi krta hai
/*
let arr = [10,20,30,40,50];
arr.forEach(function(num){
    console.log(num);
})

// or

let arr2 = [10,20,30,40,50];
arr2.forEach(num=>console.log(num));

let arr3 = [10,20,30,40,50];
arr3.forEach((num,index) => console.log(num,index));

// modify the original array using forEach
let arr4 = [10,20,30,40,50];
arr4.forEach((num,index,a) => {
    a[index] = num + 10;   // update the original array
});
    console.log(arr4);
*/

// **** filter
/*
let arr = [10,20,31,30,33,21,40,50];
// const res = arr.filter((num) => {
// return num%2==0;
// })
const res = arr.filter(num => num%2==0);
console.log(res);

const students = [
    {name:"mahan", age: 22, marks:70},
    {name:"sandeep", age: 24, marks:40},
    {name:"satyam", age: 32, marks:90},
    {name:"sahil", age: 23, marks:60},
    {name:"satyarth", age: 25, marks:20}
]

// const res2 = students.filter((obj) => {
//     return obj.marks > 50;
// });
// const res2 = students.filter((value) => value.marks > 50);    

const res2 = students.filter(({marks}) => marks > 50);  // destructure
console.log(res2);    
*/
//-------------------------------------
//**** MAP ******

const arr5 = [1,2,3,4,5];
// const res3 = arr5.map((num) => num*num);
const res3 = arr5.map((num,index) => num*index)
console.log(res3);

const arr6 = [1,2,3,4,5,6];   
//-----------------------------------
const result = arr6.filter((num) => num % 2 == 0).map((num) => num*num).map((num) => num / 2);
console.log(result);

