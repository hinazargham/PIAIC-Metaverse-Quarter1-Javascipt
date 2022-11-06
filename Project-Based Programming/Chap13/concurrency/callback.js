
function doFlexibleStuff(executeStuff){ // to call different functions
    executeStuff();
    console.log("Do Flexible Stuff");

}

const function1 = () => console.log("Hello from Function 1");
const function2 = () => console.log("Hello from Function 2")


doFlexibleStuff(function1)
doFlexibleStuff(function2)


// function doFlexibleStuff(callback){ // to call different functions
//     callback();
//     console.log("Do Flexible Stuff");

// }

// const function3 = () => console.log("Hello from Function 3");
// const function4 = () => console.log("Hello from Function 4")


// doFlexibleStuff(function1)
// doFlexibleStuff(function2)
