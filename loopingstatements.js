// minimum iteration count of for loop is 0.
// minimum iteration count of while loop is 0.
// minimum iteration count of do-while loop is 1.
// ^ Even Number

// let n = 100;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is a even number");
//   } else {
//     console.log(i + " is a odd number");
//   }
// }

//^  Write a javascript program to find a factorial of a number

let n = prompt("Enter a number");
let x = 1;
for (let i = 1; i <= n; i++) {
  x = x * i; //multiplication assignment operator
}
console.log("The factorial of " + n + " is " + x);

//^ For Loop

// for (let i = 0; i <= 5; i++) {
//   console.log("Hello world");
// }

//^ While Loop

// let i = 0;
// while (i <= 5) {
//   console.log("Hello world");
//   i++;
// }

//^ Do-While Loop

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 6);