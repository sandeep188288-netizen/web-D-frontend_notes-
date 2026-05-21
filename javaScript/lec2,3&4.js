/*// declare variable

// primitive dataType
// (number, boolean, string, null, undefined, Symbol, bigint)

let account_balance = 20         
console.log(typeof account_balance)  // typeof => define the type
console.log(account_balance)

let str = "sandeep"             
console.log(str)

let statement = false;
console.log(statement);

// Undefined
let account;
console.log(account);       // o/p => undefined

// Null
let bal = null;
console.log(typeof bal)         // object (this is an error follows old version code )  ***
console.log(bal);

// bigint
let a = 34567876543456756789232n;
console.log(a);

console.log(Number.MAX_SAFE_INTEGER)            // 64 bit => [-(2^53-1) to (2^53-1)] :
console.log(Number.MIN_SAFE_INTEGER)            // (1 sign bit)+(11 bit is expon ent)+(52 bits is Mantissa) = 64 bits 

// if bit = 3(- - -) then highest +ve number can be stored is (2^3-1) and lowest number(-(2^3-1))
// 1st bit is sign bit represt +ve or -ve sign
*/

//----------------------------------------------------------------------------------------------------------------------------

// non primitive data type => Array, Object, function
/*
let arr = [10,20,30];
console.log(arr);                 // type of object

// ********* object **********
// key:value

let obj = {
    user_name: "Sandeep" ,
    account_number: 245143513247 ,
    balance: 420

}
console.log(obj);


/*********** function *********** 

let fun = function(){      // type of function itself
    console.log("Hello guys sandeep this side")
   
}
fun();

let fun2 = function(){      // type of function itself
    console.log("Hello guys sandeep this side")
   return 10;
}
console.log(fun2());        // calling 


/********** Type conversion **********

let account_balance = "100";            // type of string
let num = Number(account_balance);      // type of number

console.log(num)

// Boolean convert to number

let x = true                //1
console.log(Number(x))

let y = false               // o
console.log(Number(y))


let account = "100xs";
console.log(Number(account))    //  o/p-> not a number = 

// null

let x1 = null;
console.log(Number(x1));        //0

// undefined
let x2;
console.log(Number(x2))     // NaN

// String ke andar convert

let ab = 20;
console.log(String(ab));    // 20 -> boolean

let ax = true;
console.log(String(ax))     // true -> string

// boolean
let abc = "hgdsufsav"       // give true
// let pqr = ""                // give false => empty string
// let xyz = " "               //give true => space
console.log(Boolean("abc"))     

//arithematic operator
console.log((((6*(3+18))/6)-9));

// 18+3-9
// solve from left to right
// divide / multiply -> 1st priority
// addition / subtraction -> 2nd priority 

console.log(20%3) 
*/

//-----------------------------------------------------------------------------

// comparison operator
let a1 = 1;
let a2 = 2;
console.log(a1 == a2);      // false

let num = 10;                 
let str = "10";             // true
// let str = "20";            // false
console.log(num == str);    
console.log(num===str)      // "===" checks type -> if same then give true

console.log(null == undefined)      // true
console.log(null === undefined)      // false

// NOTE: null can only be equivalent to undefined
console.log(null == 0);         //false
console.log(null < 0);          //false
console.log(null > 0);          //false
console.log(null <= 0);         //true
console.log(null >= 0);         // true

console.log(undefined == 0);         //false  (undefined is basically not a number)
console.log(undefined < 0);          //false
console.log(undefined > 0);          //false
console.log(undefined <= 0);         //false
console.log(undefined >= 0);         //false

let abc1 = 123;
let abc2 = "123"        // abc1 == abc2 -> true
let abc3 = 123;         //but true == abc3 -> false if in place of abc3 is true then output will be true
console.log(abc1 == abc2 == abc3)       // false

console.log(undefined != null)      // false 

// logical operator

let age = 18;
let money = 400;

console.log(age < 18 && money > 200);       //false
console.log(age > 18 || money > 200);       // true
console.log(!(age > 10));                    // false

// bitwise operator -> compare binary

console.log(4 & 5)        // compare 100 & 101 = 100 => 4
console.log(11 & 14)      // compare 1011 & 1110 = 1010 => 10
console.log(11 | 14)     // compare 1011 | 1110 = 1111 => 15

console.log(5<<3)       
// 5 multiply by 2 power 3 
//101.0000000
//101000.0000   shift 3 zero to left 
console.log(20>>2)      
// 20 divided by 2 power 2
//10100.000000
//101.00000000   shift 2 zero to right
