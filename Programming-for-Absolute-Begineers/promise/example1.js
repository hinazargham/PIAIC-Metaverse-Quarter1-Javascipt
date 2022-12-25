// cart example

const cart = ["shoes", "shirts", "bags"];

const promise = createOrder(cart); //create order
console.log(promise);

promise
.then(function (orderId) {
    console.log(orderId);
   // proceedToPayment(orderId);
})
.catch (function (err) { // if we reject the promise
    console.log(err.message);
});

function createOrder(cart){
    const pr = new Promise (function(resolve, reject){

        //Create Order
        //Validate Cart
        //orderId

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
// logic for create order
        const orderId ="12345";
        if (orderId){
            setTimeout( function() {
                resolve(orderId)
            }, 2000);    
        }
    });

    return pr;
}

function validateCart(cart){
   return true; // resolve promise
   //return false; // reject promise

}