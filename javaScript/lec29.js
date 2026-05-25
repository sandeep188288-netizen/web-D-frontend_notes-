console.log("hello Everyone");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

function greet(){
    const a = 2+3;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program End");

//------------------------------

/*         event loop
                |
                |
              Queue
             /    \
            /      \
     microtask      callback
      queue           queue
        |                |
  1st priority       2nd priority
        |                 |
    includes             includes
    (promises )       (setTimeout,setInterval,etc)
    

    */