/*let a = 10;
let b = a;
b = 30;
console.log(b);
console.log(a)

// primitive data type vs non primitive data type
// primitive data type -> Immutable
// non primitive data type -> Mutable

let obj1 = {
    id:20,
    naming:"sandeep"

}
let obj2 = obj1;
obj2.id = 30;
console.log(obj1);
console.log(obj2);
*/
//------------------------------------------------------------------------

// primitive
// const num = 10
// num = 20
// console.log(num)         // num not changed

// non primitive
// const obj = {
//     id: 10,
//     balance: 200
// }
// obj.id = 11;
// console.log(obj)            // id changed

// ************* string in js. ********
/*
let str1 = "hello guys";
let str2 = 'i am sandeep';      // or
let str3 = `mai to mast hu`;    // or   imp.
console.log(str1, str2, str3);

let price = 50;
console.log(`price of book is ${price} `) // use of back tick


// string cocatenation
let str4 = "hello kaise ho "
let str5 = "aap log "
let str6 = str4+str5;
console.log(str6)
console.log(str6.length)

console.log('"hello friends"')

let message = "hello guys. \nMai hu don"   // \n -> next line
console.log(message)

// escape character \       imp.
let message2 = "hello guys. \\nMai hu don"   // \n -> next line
console.log(message2)

let special = "sAnDeep"
console.log(special[4])
console.log(special.charAt(4))      // or

// to lowercase
// to uppercase
console.log(special.toLowerCase())
console.log(special.toUpperCase())

// NOTE:- LENGTH (JAISE S3.length) KO CHODD KE SAB ME FUNCTION = () USE KRENGE

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.lastIndexOf("coder"))      // small k not present so iutput is -1
console.log(hero.includes("Coder"))         // true because Coder is present in string

// slicing
            //   01234567
let newstring = "HelloDon";
             //-8-7-6-5-4-3-2-1
console.log(newstring.slice(0,3));      // Hel -> last index not included
// slice can take -ve index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5))      // go from left to right i.e. starting idx should before the end one 


let str10 = "Helllo Ji Kaise Ho Ji";
console.log(str10.replace("Ji", "Mohan"));
console.log(str10.replaceAll("Ji", "Mohan"));

// string converting into array
let str11 = "Money! honey! sunny! funny";
console.log(str11.split("!"))
console.log(str11.split("! "))      // removing space

let str12 = "     Hello ji  ";
console.log(str12.trim())   // removes strating an d ending spaces
console.log(str12.trim().length)
*/
//-------------------------------------------------------------------------

 let num1 = 231;
 let num2 = new Number(231);    // [Number: 231]
 let num3 = new Number(231);
 console.log(num2)      // object

 console.log(num1 == num2);     // true
 console.log(num2 == num3);     // false

 let num = 231.68;
 console.log(num.toFixed(1))        // round-off
 console.log(num.toPrecision(2))       // 2.3e+2
 console.log(num.toExponential(2))      // 2.32e+2
 console.log(typeof num.toString())     // string
 console.log(num.valueOf())             // 231.68

 // MATH

 console.log(Math.E)        //2.718281828459045
 console.log(Math.LN10)     //2.302585092994046
 console.log(Math.PI)       //3.141592653589793

 let num5 = 23.4;
 console.log(Math.floor(num5));
 console.log(Math.ceil(num5));

 console.log(Math.floor(Math.random()*10));     // random values *****
 // 0<=value<1
 // 0-9

 // 1-10
 console.log(Math.floor(Math.random()*10)+1);    // (0-9)+1

 // 11 - 20
console.log(Math.floor(Math.random()*10)+11);   // (0-9)+11

  // formula is:
  // min = 40, max = 50
  //console.log(Math.floor(Math.random()*(max-min+1))+min);

  // 0 - 10
console.log(Math.floor(Math.random()*11))

  // 10-20
console.log(Math.floor(Math.random()*11)+10)

// LUDO

console.log(Math.floor(Math.random()*(6-1+1))+1)       // min = 1, max = 6
