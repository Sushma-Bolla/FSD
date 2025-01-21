// console.log(10);
// console.log(20);
// console.l0g(30);
// console.log(40);
// console.log(50);

//~ setTimeout is printed only once but setInterval is printed many times.
// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.l0g(30);
// // })
// // setTimeout(()=>{
// //     console.log(30);
// // })
// setTimeout(()=>{
//     console.log(30);
// },5000)
// setInterval(()=>{
//     document.writeln("MRU")
// },1500)
// console.log(40);
// console.log(50);

//~ promise
//* handling promise we use then, catch, and finally.
let p1 = new Promise((resolve, reject)=>{});
// console.log(p1)

let p2 = new Promise((resolve, reject)=>{
    resolve("Success");
    //reject("reject");
});
console.log(p2);
p2.then((response)=>{
    console.log(response);
})
p2.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally printing for both");
})

let p3 = new Promise((resolve, reject)=>{
    reject("Failures");
});
