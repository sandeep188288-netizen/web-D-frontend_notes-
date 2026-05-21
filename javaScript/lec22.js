const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",

  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",

  "Dream big and dare to fail. — Norman Vaughan",

  "Do something today that your future self will thank you for.",

  "Push yourself, because no one else is going to do it for you.",

  "Hard work beats talent when talent doesn’t work hard.",

  "Great things never come from comfort zones.",

  "Believe you can and you're halfway there. — Theodore Roosevelt",

  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",

  "Your only limit is your mind.",

  "Small steps every day lead to big results."
];


const button = document.querySelector("button");
button.addEventListener('click',()=>{   // for double click use dblclick
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
const text = document.getElementById("quotes");
const Index = Math.floor(Math.random() * quotes.length);
text.textContent = quotes[Index];
})

// keyboard change -> press any key in keyboard the quote will change 

// document.addEventListener('keydown', ()=>{      // keyup -> button chodne pe change hoga 
// const text = document.getElementById("quotes");
// const Index = Math.floor(Math.random() * quotes.length);
// text.textContent = quotes[Index];
// })

// eventlistener -> harr ek location bta dega jaise kon si key press ki etc
// document.addEventListener('keydown', (event)=>{ 
// if(event.key == "Enter"){    
// const text = document.getElementById("quotes");
// const Index = Math.floor(Math.random() * quotes.length);
// text.textContent = quotes[Index];
//     }
// })

