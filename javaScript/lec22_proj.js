const button = document.querySelector('button');

button.addEventListener('click', ()=>{

        // Read the output
        const input1 = document.getElementById('first');        // first access lo
        const number1 = Number(input1.value);       // input.value pehle string me hoga number me krenge

        const input2 = document.getElementById('second');
        const number2 = Number(input2.value); 

        if(isNaN(number1) || isNaN(number2))
            return;

        // Output the result
        const result = number1+number2;
        const res = document.getElementById('result');
        res.textContent = "Result : " + result;       // trxt content change krenge


})

// hw = BMI calculator