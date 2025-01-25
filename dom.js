//& document.getElementById
// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");
// element.innerHTML = "<h1>Header</h1>"
// console.log(div);

//& document.getElementByClassName
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele)); //returning false so it is not a pure array now we have to convert it into pure array.
// ele[0].style.backgroundColor="yellow";
// //*spread operator - used to takeout each and evaery value from original array and store it in new array(pure array).
// //* syntax :- [...variable]
// let x = [...ele]
// console.log(x); 
// console.log(Array.isArray(x)); //returning true so it is a pure array.
// x.map((element)=>{
//     element.style.backgroundColor="teal";
// })

//& document.getElementByTagName
// let ele = document.getElementsByTagName("div");
// console.log(ele);

//& document.getElementByName
// let ele = document.getElementsByName("username");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element);
//     element.style.backgroundColor="aqua";
// })

//& document.querySelector - prints only one div class in the console.
// let ele = document.querySelector("#demo");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

//& document.querySelectorAll - prints all the div classes in the console.
// let ele = document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })
