const id = document.querySelector("#first");    // kisi ko bhi selext krr skta hai
id.innerHTML = "Hello Dost"

const id2 = document.querySelector(".header2");    // .header2 selects the first element with class header2
id2.style.backgroundColor = "pink";

// how to iterate over Node list
// const Obj = document.querySelectorAll(".header1");   // querySelectorAll returns a NodeList of all elements matching the selector

// method 1 : using forEach loop
// Obj.forEach(val=>{
//     console.log(val)  
// })

// // 2: using for of loop
// for(let val of Obj){
//     console.log(val);
// }

//3: using for loop
// for(let i=0; i<Obj.length; i++){
//     obj[i].style.color = "red";
// }

// convert NodeList to Array
// Arrays.from(obj);

// ---------------------------------------

// Accessing by Tag name ********

const obj = document.getElementsByTagName("h1");

let team = document.getElementsByTagName("li");

// hoe to iterate over it

//1: for loop
// for(lwt i = 0; i < team.length; i++)
//     team[i].style.color = "balck"

//2:for of loop
// for(let val of team)
//     console.log(val)

//3: forEach
// Array.from(team).forEach(val)=>{
//     console.log(val);
// })

//---------------------------------------------

// accessing using relationship *******

// const list = document.querySelector("li");
// console.log(list.parentElement);
// console.log(list.parentNode);


const par = document.querySelector("ul");
console.log(par);
console.log(par.childNodes);   // take the spaces also which is befor and after the "<li>any<li>" i.e. all childs
console.log(par.children);      // only take the HTML elements i.e. 4 "li"

// ***** siblings Nodes *******
// Methods: element.nextSibling, element.prevSibling
// Element Siblings : Element.nextElementSibling, element.prevElementSibling

/*
innerHTML : pura tag dega as it is print krke inside h1 wala('Hello everyone <strong style="display: none;">coder ho</strong>"')
textContent : pura nahi dega keval content dega including hided ones('Hello everyone coder ho')
innerText : display:none(hidden content) ko nahi dega like content ('Hello everyone')

*/