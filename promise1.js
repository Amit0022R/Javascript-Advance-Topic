// Promise -> used to handle async operation in js

// Promise ->> Object repersenting eventual completion or   failure of an aysnchronous operation.

// Promise is placeholder which will be field later with a value

// Promise is in one of these states:
//  pending ->> initial state , neither fullfilled nor rejected
//  fulfilled ->> meaning that the operatiion was completed successfully.
//  rejected ->> meaning that the operation failed

// Promise object are inmutable


// const cart = [ "shoes" , "pants" , "kurta" ];

// createOrder( cart , ( orderId ) => {
//     proceedToPayment(orderId);
// } );

// const promise = createOrder(cart);
// promise.then( ( orderId ) => {
//     proceedToPayment(orderId);
// } );

// fetch -> API given by browers to us to make external call

// const GITHUB_API = "https://github.com/Amit0022R"

// const user = fetch(GITHUB_API); // fetch returns promise


/*
const cart = [ "shoes" , "pants" , "kurta" ]
createOrder(cart , (orderId) => {
    proceedToPayment(orderId , (paymentInfo) => {
        showOrderSummary(paymentInfo , () => {
            updateWalletBalance();    
        })    
    })    
})
*/

// we convert line 33 to 42  in below code

/*
createOrder(cart)
.then((orderId) => {
   return proceedToPayemnt(orderId);
})
.then((paymentInfo) => {
   return showOrderSummary(paymentInfo)
})
.then((paymentInfo) => {
    return updateWalletBalance(paymentInfo)
})
*/

// always return a promise from promise when we are chaining it

 






























