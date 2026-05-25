// call back hell
/*

function placeOrder(callback){
    console.log("Talking with Domino's.....");

    setTimeout(()=>{
        console.log("Order placed successfully");
        callback();     // necessary to call
    },2000)
}
function preparingOrder(callback){
    console.log("Pizza preparation Started.....");

    setTimeout(()=>{
        console.log("Pizza preparation Done")
        callback();
    },2000)
}
function pickupOrder(callback){
    console.log("Reaching restaurant for picking the order.....");

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy")
        callback();
    },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way.....");

    setTimeout(()=>{
        console.log("Order Delivered successfully");
    },5000)
}

// placeOrder(preparingOrder); // only call 2 function

// ******* callback hell *******
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
})

*/

//----------------------------------------------------
// call back function

/*
function fetchuser(callback){
    console.log("fetching the user details......");

    setTimeout(()=>{
        console.log("Data fetched successfully");
        
        // data fetched from backend

        // const name = "Sandeep";
        // callback(name);    // baar baar greet aur meet k liye call nahi krna pdega 
        
        const obj = {
            name: "sandeep",
            age: 21,
            gender: "male"
        }
        callback(obj);    // jo mai chahta hu wahi print karaunga
    },2000);
}

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you in hell`);
    
}
function printAge(obj){
    console.log(`User ${obj.age}`)
}

fetchuser(greet);
fetchuser(printAge);        // use meet or greet or other function by using callback as what u want to display

*/

//----------------------------------------------------

// JS is single threaded synchronous language

// JS behavious: Async

// console.log("10");

// setTimeout(()=>{
//     console.log("20");
// },2000)

// console.log("30");       // 10 30 20

// single threaded -> one task will be executed at a time

console.log("10");

const timer = Date.now();
// timer is my older time
while(Date.now()-timer < 2000){    // curr time - old time
// wait for 2 sec
}

console.log("20");

console.log("30");          // 10 20 30