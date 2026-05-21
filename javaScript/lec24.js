const form = document.querySelector('form');

// form.addEventListener('input','click', (event)=>{
//     // console.log(event.target);
//     console.log(event.target.value)
// })

// form.addEventListener('change','click', (event)=>{      // form me input field se bahrr jane k baad trigger hoga
//     console.log(event.target.value)
// })

// form.addEventListener('focus','click', (event)=>{       // does'nt follow bubbling 
//     console.log(event.target.value)                     // jab focus krunga particular input pe jab jake wo event trigger hoga
// })

// form.addEventListener('submit','click', (event)=>{       // jab bhi form submit hoga page refresh ho jaega
//     console.log(event.target.value)                     
// })

form.addEventListener("submit", (event)=>{

    event.preventDefault();     // name print hojaega aur page bhi refresh nahi hoga

    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);

    // const res = document.getElementById('res');
    // res.innerText = `${first.value} ${second.value} is a good boy`
    
    // document.body.append(res);

    // or

    const data = new FormData(form);

    for(let [key,value] of data.entries())        // iterator | destructuring-> [key,value]
        console.log(key, value);
    // console.log(Arrays.form(data.keys()));
    // console.log(Arrays.form(data.values()));



    // keys ,value pair

})