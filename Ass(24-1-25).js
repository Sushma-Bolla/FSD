//~ Assignment
// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow";
// })
// let btn2 = document.getElementById("btn2");
// btn2.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="green";
// })
// let btn3 = document.getElementById("btn3");
// btn3.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="blue";
// })
// let btn4 = document.getElementById("btn4");
// btn4.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="teal";
// })
// let btn5 = document.getElementById("btn5");
// btn5.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="red";
// })

let bgColor = document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor = element.innerText;
    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor = "transparent";
    });
})