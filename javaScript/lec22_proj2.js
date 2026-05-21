document.body.addEventListener("click", (event)=>{

    const circle = document.createElement('div')
    circle.className = 'circle';     // assign nahi hai to aise krwana hai
    circle.textContent = "Hi";

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`     // -25 is used for centre the circle during click
    circle.style.top = `${y-25}px`

    const color = ["red","blue","green","yellow","purple","wheat","orange","pink","brown"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);

    setTimeout(()=> {       // 5sec baad
        circle.remove();
    },5000)
})