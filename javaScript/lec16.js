// reduce
/*
const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce(callback, initialization);
// const result = arr.reduce((acc, curr) => {
//     acc = acc+curr;
//     return acc;
// },0)
const result = arr.reduce((acc, curr) => acc + curr, 0);  //or
console.log(result);
//--------------------------------------------------------------
let array = ["apple", "banana", "grapes", "orange", "mango","apple", "banana", "grapes", "orange", "mango"];
// final result ek object ke form 
// apple = 2
// banana = 2
// acc = {} 

const result1 = array.reduce((acc, curr) => {
    // acc.hasOwnProperty(curr) => ? acc[curr]++: acc[curr] = 1;        //or (not preferred)
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr] = 1;
    return acc;
},{});
console.log(result1);


*/
//---------------------------------------------------------------
/*
//****** SETS ******* -> (object)
// set : unique values only store krta hai, order maintain nahi krta, iterable hota hai, size property hoti hai, methods => add(), delete(), has(), clear()

const set1 = new Set([1,2,3,4,5]);
console.log(set1);
set1.add(6);
console.log(set1);
set1.delete(3);
console.log(set1);

console.log(set1.size);
//-------------------------------
const user_id = new Set(["sandeep_kushwaha", "mohit_kumar", "riju_rizwan", "mohit_lala"]);
let new_user = "sandeep_kushwaha";
console.log(user_id.has(new_user));   //true

//-------------------------------
user_id.clear();
console.log(user_id);       //Set(0) {}

//-------------------------------
let arr = [1,2,3,4,5,5,5,6];
let unique = new Set(arr);
arr = [...unique];     //or arr = Array.from(unique);
console.log(arr);      //[ 1, 2, 3, 4, 5, 6 ]
console.log(unique);       //Set(6) { 1, 2, 3, 4, 5, 6 }

// union

let set2 = new Set([1,2,3]);
let set3 = new Set([3,4,5]);
let union = new Set([...set2, ...set3]);
console.log(union);     //Set(5) { 1, 2, 3, 4, 5 }

// intersection
//filter: array

// const res = [...set2].filter((num) => set3.has(num));     //[ 3 ]
// for result in set form
const res = new Set([...set2].filter((num) => set3.has(num))); 
console.log(res);

// iterate over set
// 1.for of loop: iterator
for(let value of set2){
    console.log(value);
}
//2.forEach loop
set2.forEach((value) => console.log(value));

*/

// **** MAP ****

// map : key-value pair store krta hai, 
// keys unique hoti hai,
//  order maintain nahi krta, 
// iterable hota hai, 
// size property hoti hai, 
// methods => set(), get(), has(), delete(), clear()
 
const map1 = new Map();
map1.set(3,90);
map1.set("sandeep", 45);
map1.set(20,"mohan");
console.log(map1);      //Map(3) { 3 => 90, 'sandeep' => 45, 20 => 'mohan' }

console.log(map1.has("sandeep"));   //true

const map2 = new Map([
    [4,"mohit"],
    ["mohan", "sohan"],
    [30,9]
]);

console.log(map2);      //Map(3) { 4 => 'mohit', 'mohan' => 'sohan', 30 => 9 }

// for of loop
for(let [key,value] of map1)
    console.log(key,value);         