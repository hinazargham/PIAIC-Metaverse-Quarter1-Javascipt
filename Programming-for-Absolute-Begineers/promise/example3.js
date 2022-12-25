
const cart = ["shoes", "shirts", "bags"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId)
})
.then( function (paymentInfo) {
    console.log(paymentInfo)
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

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment resolved")
    });
}

function validateCart(cart){
   return true; // resolve promise
   // return false; // reject promise

}