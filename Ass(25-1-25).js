//!assigment
    //  <!-- <div class="mainBlock">
    //     <div class="topBlock">
    //         <img src="" alt="">
    //     </div>
    //     <div class="bottomBlock">
    //         <h1>Heading</h1>
    //         <button>View More</button>
    //     </div>
    //  </div> -->

    
let mainEle = document.createElement("div");
mainEle.setAttribute("class","mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");
console.log(topEle);

let image = document.createElement("img");
image.src="./img.jpg"
image.width="300"
image.height="300"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");
// console.log(bottomEle);
let h1 = document.createElement("h1");
h1.innerText="Heading";

let btn = document.createElement("button")
btn.innerText="View More";

mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);
topEle.appendChild(image);
bottomEle.appendChild(h1);
bottomEle.appendChild(btn);