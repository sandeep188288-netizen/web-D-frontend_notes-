const arr = [2, 35, 1,8,9, "sandeep", true]
console.log(arr.length);
console.log(arr[0]);
console.log(arr.at(-2))     // latest -> it takes -ve index also

const newarr = arr;
console.log(newarr == arr);     // true

const newarr2 = structuredClone(arr);     // helpfull
console.log(newarr2 == arr);        // false

// push -> insert at last
arr.push(30);
console.log(arr);

// pop -> remove from last
arr.pop();
console.log(arr);

// ubshift -> add element at start
arr.unshift(60)
console.log(arr);

// shift -> remove from start
arr.shift()
console.log(arr);

// delete -> delete from particular start
// delete arr[0];          // not good->space reseved
// console.log(arr);      // [ <1 empty item>, 35, 1, 8, 9, 'sandeep', true ]

console.log(arr.indexOf(9))     // if repeated element then it will index of 1st element
console.log(arr.includes(9))     // if element present then true otherwise false

// slice : no change in original arr
console.log(arr.slice(2,4)) // last index not included
console.log(arr)        //[ 2, 35, 1, 8, 9, 'sandeep', true ]

// splice:  (start idx,total values) : changes in original array
console.log(arr.splice(2,4))     // 2nd index se start kro total 4 value chahiye
console.log(arr)        //[ 2, 35, true ]

// splice(starting_index, total_element, add_value)
arr1 = [1,2,3,4,45,"sandeep",true];
arr1.splice(2,5,"money",90,97)
console.log(arr1)

arr2 = [1,2,3,4,45,"sandeep",true];
arr2.splice(2,0,"money",90)      // don't want to delete only add
console.log(arr2)

// arr to string
console.log(arr)
console.log(arr.toString());
console.log(arr.join("*"));

// concatenation
let arr4 = [2,3,44,65];
let arr5 = [4,5, 65,77];
let arr6 = [86,33,22,878];
let arr7 = arr4.concat(arr5,arr6)
console.log(arr7)

// 2D array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[1][2])      // 6

// 2D into 1D
let newarr5 = arr2d.flat();
console.log(newarr5)

// 3D array
let arr3d = [[1,2,3,[53,32,22]],[4,5,6],[7,8,9]];
let newarr6 = arr3d.flat(Infinity);
console.log(newarr6);

// check
let abc = [1,2,3,4];
console.log(Array.isArray(abc))     // true

