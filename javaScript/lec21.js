//****** Created an element *******

// let element = document.createElement('li')
/*

function attach(content){
const element1 = document.createElement('li');
element1.innerHTML = content;

const element2 = document.createElement('li');
element2.innerHTML = content+"V2.0";

const parent = document.getElementById("root");
// parent.appendChild(element);
parent.append(element1,element2)
}

attach("TS");
attach("React");
attach("Node");

*/

// creating a TextNode ****** (not tag li ul,li etc)
/*

const element = document.createTextNode("hello guys");

const parent = document.getElementById("root");
parent.append(element);

*/

// creating a AttributNode ****(less use)
/*

const element = document.createAttribute("id");
element.value = "first";

// at first position of list
// const curr_list = document.querySelector('li'); // 1st appearing tag ka access le lega
// curr_list.setAttributeNode(element);



// at 2nd position of list
const parent = document.getElementById("root");
parent.children[1].setAttributeNode(element);

*/

// ******* access attributes of a element ******
/*
const element = document.getElementById("root");
// console.log(element.getAttribute("class")) // mohan
element.setAttribute("custom", "20");         // set
element.setAttribute("class", "rohan");     // update
element.removeAttribute("custom");
*/

// ******* Add nodes to the DOM ******
/*
const parent = document.getElementById("root");     // let assume it is a array

const element = document.createElement('li');      
element.innerHTML = "TS";                           // assume its a data     

// parent.prepend(element);     // at begginning
// parent.append(element);         // at end

const child2 = parent.children[1];
// parent.insertBefore(element,child2);       // at particular position

parent.replaceChild(element, child2);   // for replacement

*/

// const parent = document.getElementById("root");    
// parent.innerHTML += "<li>TS</li>";      // insert at last

// for div ***
/*
const parent = document.getElementById("root");    
const element = document.createElement("div");

element.innerHTML = "Hello bhaiyon"

// parent.insertAdjacentElement("beforebegin", element);        // at beginning
parent.insertAdjacentElement("afterend", element);              // at end

*/

// ****** Delete node or element *******

// document.querySelector('li').remove;
 
//or

const element = document.querySelector('li');
element.remove();
