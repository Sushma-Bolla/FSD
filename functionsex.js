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
//~explicit return 
function add(a,b){
    console.log("after");
    return a+b; 
    console.log("before") //will not print
}
let x = add(5, 5);
console.log(x);

//~implicit return - not possible through normal function only possible in arrow function.
let y = (a,b) => a+b;
console.log(y(10,5));