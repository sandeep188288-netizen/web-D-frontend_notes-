// callbackhell

// Promise -> the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// promise statw -> 1.pending | 2.resolve | 3.reject
// async task

// weather

// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=a79179f5f6574531822162519262605&q=London&aqi=yes`)
// console.log(Promises)           // not correct way as it gives -> Promise { <pending> }

//------------------------------------------------------
// Promises.then((response)=>{
//     // console.log(response.json());   // Promise { <pending> }
//     const pro2 = response.json();
//     pro2.then((data)=>{
//         console.log(data)
//     })
// })

// //------------------------------------------------------

// or

//------------------------------------------------------

// const pro2 = Promises.then((response)=>{
//     return response.json();
//     }).then((data)=>{
//         console.log(data)
// })

//------------------------------------------------------

// or

//------------------------------------------------------

// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))

//------------------------------------------------------

// or

//------------------------------------------------------

// best way to write promise
fetch(`http://api.weatherapi.com/v1/current.json?key=a79179f5f6574531822162519262605&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data))
.catch((error)=>console.log(error));


//----------------------------------
// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


