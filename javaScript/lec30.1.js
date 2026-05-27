
cart = ["pizza","coke","sanwich"];

function placeOrder(cart){
    console.log("Talking with Domino's.....");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{

        const food_available = true;
        if(food_available){
        console.log("Order placed successfully");
        const order = {orderId: 221, food: cart, restaurant: "Dominos", location:"ayodhya bypass"}
        resolve(order);    
        }
        else{
            reject("Items Out of Stock");
        }
    },2000)

    })

    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation Started.....");

    const pr = new Promise(function(resolve, reject){
        
        setTimeout(()=>{
            const chef_available = true;

            if(chef_available){

            console.log("Pizza preparation Done")
            const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
        }
            else {
                reject(" Chef not available");
            }
        },2000)
       
    })
    
    return pr;
}

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking the order.....");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            const delivery_boy_available = true;

            if(delivery_boy_available){
                console.log("Order picked up by Delivery Boy");
                const droplocation = foodDetails.location;
                resolve(droplocation);
            } else {
                reject("Delivery boy not available");
            }
        },3000);
    });
    return pr;
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way.....");

    setTimeout(()=>{
        console.log("Order Delivered successfully");
    },5000)
}

// placeOrder(preparingOrder); // only call 2 function

// placeOrder(cart, callback);

// ******* callback hell *******
// placeOrder(cart, (order)=>{
//     preparingOrder(order, (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     });
// });

// const prom = placeOrder(cart);

// prom.then((order)=>{
//     preparingOrder(order);
// })

// using promise
placeOrder(cart)
.then(order => preparingOrder(order))
.then(foodDetails => pickupOrder(foodDetails))
.then(droplocation => deliverOrder(droplocation))
.catch(error => console.log(error));