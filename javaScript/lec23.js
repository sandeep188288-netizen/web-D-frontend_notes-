/*
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const purple = document.getElementById('purple');
const body = document.body;         // access of a body
// document.querySelector('body')      // or 

red.addEventListener('click',()=>{
    body.style.backgroundColor = 'red';
})
blue.addEventListener('click',()=>{
    body.style.backgroundColor = 'blue';
})
orange.addEventListener('click',()=>{
    body.style.backgroundColor = 'orange';
})
green.addEventListener('click',()=>{
    body.style.backgroundColor = 'green';
})
purple.addEventListener('click',()=>{
    body.style.backgroundColor = 'purple';
})
*/

// or
                                                        // steps:
const buttons = document.querySelectorAll('button');    // sari buttons ka access
const body = document.body;                             // body ka access

buttons.forEach((button)=>{                             // ek ek karke sari buttons ka access

    button.addEventListener('click',()=>{               // pehla jo button mila click wala operation lagaya
        body.style.backgroundColor = button.id;         // button k background color ko change kro jo id hai waha background k liye button.id lagaya
    })
});

// by normal loop
// const buttons = document.querySelectorAll('button'); // sari buttons ka access
// const body = document.body;                          // body ka access

// for(let i = 0; i < buttons.length; i++) {            // ek ek karke sari buttons ka access

//     buttons[i].addEventListener('click', () => {     // current button par click event
//         body.style.backgroundColor = buttons[i].id;  // button ki id ke according color change
//     });

// }
//---------------------------------------------------------------------------------------------

// **** ye optimized code nahi hai, yaha keval 5 buttons hai,
//  agarr 100 ya jada aagyi to harr ek liye for loop lagega jo js ko slow krr dega.
// execution slow na ho isliye humm "eventBubbling ka use karenge"

// eventBubbling -> eg. maine 3 div banayi : child -> parent(child inside it) -> Grandparent(parent and child inside it),
//                agrr mai child ko click krta hu to wo propagate hoke bahrr ko jaega parent and grandparent ki taraf like a bubble,
//                agrr mai parent ko click krta hu to wo propagate hoke towards grandparent jaega child pe nahi aaega,
//                ye trigerring chlti jaegi root element tak. Yahi hai eventBubbling.
// eventCapturing -> opposit of eventBubbling

const root = document.getElementById('root');

root.addEventListener('click', (event)=>{
    // console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;
})

