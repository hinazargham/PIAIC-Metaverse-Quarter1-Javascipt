//Recursive Function
// runs like a loops and kept going
// function getRecursive(nr){ //put nr as input
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(5); // runs 

// to give a stop condition
function getRecursive(nr){ //put nr as input
    console.log("Started function iteration: ", nr);
    if ( nr > 0) {
        getRecursive(--nr);
    } else {
    console.log("**** Recursion Completed ****");
    }
    console.log("Function ended: ", nr);
}
getRecursive(5);

