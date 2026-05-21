const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling ad capturing

child.addEventListener('click',()=>{
    console.log("child clicked")
},false)        // by default value false hi rhti hai for bubbling
// true me capture wali property chlegi

parent.addEventListener('click',()=>{
    console.log("parent clicked")
},false)

grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked")
},false)
 

