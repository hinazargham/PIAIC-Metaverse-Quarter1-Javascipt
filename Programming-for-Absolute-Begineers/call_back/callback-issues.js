// Issues with Callback

// 1. Callback Hell

/* Callbacks are useful when we want to perfrom some extra functionality with our already existing 
function, butwhen callbacks within themselves start taking in other functions as callbacks then that 
mess that you are left with is known as the Callback Hell leading to unreadable code, 
*/

const cart = ["shoes", "shirts", "bags"];

api.CreateOrder(cart, function(){

    api.proceedToPayment (function(){

        api.showOrderSummary( function(){
            api.updateWallet()
        }
    )

    })

})

// 2. Inversion of Control

/*
when we pass a function to other function as a callback we are giving the called function the control 
of whether to even call it or not or maybe call it in a wrong context. 
*/

