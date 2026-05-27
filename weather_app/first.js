document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;

    function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}°C`;
    }

   const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=a79179f5f6574531822162519262605&q=${place}&aqi=yes`)
    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data));

})
