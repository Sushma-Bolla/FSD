//Find the maximum number among the following


// else if ladder
let a = Number(prompt("Enter value for a: "));
let b = Number(prompt("Enter value for b: "));
let c = Number(prompt("Enter value for c: "));
if(a > b && a > c){
    console.log("a is the largest number")
}else if(b > a && b > c){
    console.log("b is the largest number")
}else if(c > a && c > b){
    console.log("c is the largest number")
}else if(a == b && a == c){
    console.log("All numbers are equal")
}
else{
    console.log("Enter a valid Input")
}


//~switch
// let a = Number(prompt("Enter value for a: "));
// let b = Number(prompt("Enter value for b: "));
// let c = Number(prompt("Enter value for c: "));
// switch(true){
//     case (a > b && a > c) :
//         console.log("a is the largest number")
//         break;
//     case (b > a && b > c):
//         console.log("b is the largest number")
//         break;
//     case (c > a && c > b):
//         console.log("c is the largest number")
//         break;
//     case ( a == b && a == c):
//         console.log("All are equal")
//         break;
//     default:
//         console.log("Enter a valid Input")
// }