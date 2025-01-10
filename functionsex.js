// function addition(a, b){
//     console.log(a + b);
// }
// addition(5, 7);
// addition(12, 24);

//^Palindrome
// function isPalindrome(str){
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a Palindrome")
//     }
// }
// isPalindrome("sir")
// isPalindrome("madam");
// isPalindrome("malayalam")

//^named function
// function main(){
//     console.log("Main")
// }
// main()

//^Anonymous function - function not having any name
//*They cannot execute independently
//*to execute this we have other types of functions
// function(){
//     console.log("Anonymous function")
// }
// ();

//^function expression
//*This is one way to execute anonymous function.
// let x = function(){
//     console.log("function expression.")
// }
// x();
// x(); //executing more times
// x();
// x();

//^IIFE(immediate invoke function expression)
//*we have to wrap the function in round paranthesis.
//*It can be executed only one time.
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

//^Arrow function - to concise the syntax of normal function.
//*Syntax of arrow function - ()=>{}
// let x = ()=>{console.log("Hello")};
// x();
//*or
// let x = _ =>console.log("Hello");
// x();
//*or
// let x = a => console.log(a);
// x(10);
//*or
// let x = (a,b) => console.log(a+b);
// x(10, 5);
//*or
// let x = _ =>{console.log("Hi");
//              console.log("Bye")};
// x();

//^return statement - implicit, explicit
//*It will return either expression or variables to future use.
//*implict - returns without using return keyword manually.
//*explict - returns with using return keyword manually.
//*return statement will not print anything, to print use a variable.
// //~explicit return 
// function add(a,b){
//     console.log("after");
//     return a+b; 
//     console.log("before") //will not print
// }
// let x = add(5, 5);
// console.log(x);

// //~implicit return - not possible through normal function only possible in arrow function.
// let y = (a,b) => a+b;
// console.log(y(10,5));

//^higher ordder function
//*accepts another function as value or argument to its parameter.
// function hof(a){ //here hof is the higher order function
//     // return a;
//     return a();
// }
// // let x = hof(10);
// // let x = hof([1,2,3,4,5]);
// // let x = hof(true);
// let x = hof(function(){return "This is callback function"});
// console.log(x);

//^callback function
//*which is passed as value or argument to another function.
// function hof(a){
//     // return a;
//     return a();
// }
// // let x = hof(10);
// // let x = hof([1,2,3,4,5]);
// // let x = hof(true);
// let x = hof(function(){return "This is callback function"}); //here x is the callback function
// console.log(x);
// //~another example
// function add(callback){
//     return callback(5,3);
// };
// let x = add(function(a,b){return a+b})
// console.log(x);

//^map method
// let users = ["a","b","c","d","e"] //users is higher order function
// users.map((user)=>{ //map is callback function
//     console.log(user);
// })
//!for each only iterates, but not prints.Map method will print the values.
//!Map will copy the values of the original array and returns a new array.

//Execution process
var a = 10;
let b = 30;
function x(){
    var user = "a";
    let company = "amazon";
    const sal = 1234567890;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a, b);
}
x();

//^closure
//*is a memory created when functions bundled together/ functions are nested together by giving accessibility to the innermost function to access the variables of outermost function.
