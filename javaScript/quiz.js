
// const originalData = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar" ,"264", "Muttiah Muralitharan"];
const original_ansewers = {     // agar koi ek 3 hi select kre out of 5 me to ans 0 correct na aae
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"  
}
const form = document.querySelector('form');   // form ka access

form.addEventListener('submit', (event)=>{

    event.preventDefault();     // name print hojaega aur page bhi refresh nahi hoga    
    const data = new FormData(form);

    // const ans = Array.from(data.values());       // iterator | destructuring-> [key,value]
    // console.log(ans);

    // let result = 0;
    // for(let i = 0; i < ans.length; i++){
    //     if(ans[i] === originalData[i])
    //         result++;
    // }

    let result = 0;
    for(let [key, value] of data.entries()){
        if(value === original_ansewers[key])
            result++;
    }

    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`;

});

