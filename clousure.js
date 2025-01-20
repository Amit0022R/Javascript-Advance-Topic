// Lexical Scope defines how vairable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions.

// CLOSURE ->> Function having access to the parent scope , even after the parent function has closed

// Closure is created when we define function , Not when a function is executed

// global scope
// let x = 1;

// const parentFunction = () => {
//     // local scope
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);

//     // childFunction has access to the value form its parent function anfd global function and this is LEXICAL SCOPE
//     const childFunction = () => {
//         console.log(x += 5) ;
//         console.log( myValue += 1);
//     }
//         childFunction();
    
// }
// parentFunction();


// let x = 1;
// const parentFunction = () => {
//     // local scope
//     let myValue = 2;
//     console.log(x);
//     console.log(myValue);

//     const childFunction = () => {
//         console.log(x += 5) ;
//         console.log( myValue += 1);
//     }
//         return childFunction
//     // after log we don't get result form childFunction
// }
// const result =  parentFunction();
// console.log(result); // [Function: childFunction
// result();
// console.log(myValue); // reference error , private variable



// IIFE ->> IMMEDIATELY INVOKED FUNCTION EXPRESSION

// const privateCounter = ( () => {
//     let count = 0;
//     console.log(`Initial value : ${count}`);
//     return () => { count += 1 ; console.log(count) }
    
// })(); // this will call this function into action immediately
// privateCounter();


// Closure with an IIFE and a parameter
const credits = ( ( num ) => {
    let credits = num;
    console.log(`Initial credits value : ${credits}`);
    return () => {
        credits -= 1;
        if( credits > 0 ) console.log( `Playing game , ${credits} credits(s) remaining ` );
        if( credits <= 0 ) console.log(`not enough credits`);
        
    }
    
})(3);
credits();



