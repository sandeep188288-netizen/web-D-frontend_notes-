// OBJECT  -> (key:value) pair
// creating object
// method 1
/*
const obj = {
    0:20,
    1:30,
    2:40,
    name: "sandeep",
    account_balance: 444,
    gender: "male",
    age: 20,
    "account number": 242342
}

console.log(obj);
// accessing
console.log(obj.name);  // sandeep
console.log(obj["name"]);   //or

console.log(obj["account number"]);  // for space ones
console.log(obj["0"]);      //number

console.log(obj[2]);

*/
// method 2
/*
const person = new Object();

// property add
person.name = "Sandeep";
person.age = 20;
person.gender = "Male";
console.log(person);

// delete
delete person.age;
console.log(person);

// modify
person.name = "sumantra";
person.age = 20;        // if not exists then its created
console.log(person);

*/
// method 3 (rarely used)
/*
class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let per1 = new People("sandeep",20,"male");
let per2 = new People("sumantra",21,"male");
let per3 = new People("vishesh",22,"male");
let per4 = new People("riju",17,"female");
console.log(per1, per2, per3, per4);
*/

// methods

/*
let obj = {
    name: "sandeep",
    age: 20,
    account_balance: 435,
    gender: "male"
}

// const arr = Object.keys(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

// key:values
console.log(Object.entries(obj))    // used rarely

// assign usecase imp**

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {e:7, f:8};

const obj4 = Object.assign({}, obj1, obj2, obj3);     // necessary to give empty object
console.log(obj4);

// by spread operator (or)*****
const obj5 = {...obj1,...obj2,...obj3,...obj4};
console.log(obj5);
console.log({...obj1,...obj2,...obj3,...obj4}); // or
*/
//-----------------------------------------------------------------
/*
let obj1 = {
    a:1,
    b:2
}
let obj2 = obj1; // shallow copy -> 1 hi copy hogi dono ussi ko point krenge
obj2.a = 10
console.log(obj2,obj1);

// deep copy -> dono copy alag alag hongi
let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3,obj1)

// Nested object -> object inside object
const user = {
    name:"sandeep",
    balance: 432,
    address: {
        pincode:2534236,
        city: "maihar"
    }
}
console.log(user.address.pincode);
console.log(user)
delete(user.address.pincode);
console.log(user)

const user2 = Object.assign({}, user); //copy
console.log(user2)
user2.name = "riju" // name not changes only elements inside nested will change
user2.address.pincode = 485771;
console.log(user)

// nested wale shallow copy create karenge and outside nested wale deep copy
// user = {
//      deep copy
//      {
//     shallow copy
//      }
//    }

// Therefore, use structureClone -> taki dono alag alag bane assign me bhi obj me bhi

*/

//********* Destructuring of an object *********
// let obj = {
//     name: "sandeep",
//     money: 467,
//     balance: 100,
//     age: 20,
//     adhaar: 872348458377
// };
// const {name,balance,age} = obj;
// const {name: full_name, balance:amount, age:umar} = obj; // if want to change key
// console.log(full_name, amount, umar);

// const {name, age, ...obj1} = obj;
// console.log(obj1);

//const arr = [2,3,6,8,5,0];
//const [first,second, ,third] = arr; // , , -> skip 6
// const [first,second, ...third] = arr; //2 3 [ 6, 8, 5, 0 ]
// console.log(first, second, third);
// ...third -> rest operator

/*
let obj = {
    name: "sandeep",
    money: 467,
    balance: 100,
    age: 20,
    adhaar: 872348458377,
    arr: [63,21,76,99],
    address: {
        pincode:7645278,
        city:"maihar",
        state: "mp"
    }
};
const {address:{pincode,city}} = obj;
console.log(pincode,city);

const {arr: [first, ,third]} = obj;
console.log(first,third);       // 63 76

*/

/*
let user = {
    name: "sandeep",
    amount:7243,
    greet: function(){
       console.log("hello sandeep")
    },
    meet: function(){
        return 20;
    }
}

user.greet();
console.log(user.meet());
*/

// ***** PROTOTYPE *****
let user1 = {
    name: "sandeep",
    age:20
}

let user2 = {
    account: 20,
    money: 50
}

user2.__proto__ = user1;
console.log(user2.name);

