// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// // x.id ="demo"
// x.setAttribute("id" , "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "./img.jpg";
// console.log(image);

// document.body.appendChild(image);

//~form1
// let form = document.querySelector("form");
// let name = document.getElementById("uName");
// let mail = document.getElementById("uEmail");
// let psw = document.getElementById("uPsw");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(name.value);
//     let username = name.value;
//     let email = mail.value;
//     let password = psw.value;
//     let userDetails={
//         username:username,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userData" , JSON.stringify(userDetails))
// })
// // localStorage.clear()

//~form2
// let form = document.querySelector("form")

// let username = document.getElementById("uName");

// let password = document.getElementById("uPass");
// let check = document.getElementById("check");
// let show = document.getElementById("show");

// let gen = document.getElementsByName("gender");

// check.addEventListener("click",event=>{
//     // console.log(event);
//     if(event.target.checked == true){
//         password.setAttribute("type","text");
//         show.innerText = "hide password"
//     }else{
//         password.setAttribute("type","password")
//         show.innerText = "show password"
//     }
// })

// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     let un = username.value;
//     let up = password.value;
//     // console.log(un,up);
//     let gender="";
//     for(let i=0;i<=gen.length-1;i++){
//         if(gen[i].checked == true){
//             // console.log("true", gender[i].value);
//             gender += gen[i].value;
//         }
//     }
//     let userDetails={
//         un,up,gender
//     };
//     console.log(userDetails);
// })




// <!-- QUESTION: take array of objects each object contains empid, empname, empcompany, empsalary, and empaddress,where empaddress is again an object which contains empcity, emparea. Print all those values on the ui in the form of table.-->

let users = [
    {
        empid:"1",
        empname:"AA",
        empcompany:"a",
        empsalary:"100000",
        empaddress:{
            empcity:"Hyd",
            emparea:"Nizampet"
        }
    },
    {
        empid:"2",
        empname:"BB",
        empcompany:"b",
        empsalary:"100000",
        empaddress:{
            empcity:"Hyd",
            emparea:"Miyapur"
        }
    },
    {
        empid:"3",
        empname:"CC",
        empcompany:"c",
        empsalary:"100000",
        empaddress:{
            empcity:"Hyd",
            emparea:"Kphb"
        }
    },
    {
        empid:"4",
        empname:"DD",
        empcompany:"d",
        empsalary:"100000",
        empaddress:{
            empcity:"Hyd",
            emparea:"Jntu"
        }
    },
    {
        empid:"5",
        empname:"EE",
        empcompany:"e",
        empsalary:"100000",
        empaddress:{
            empcity:"Hyd",
            emparea:"Chandanagar"
        }
    }
];
let store = document.getElementById("store");
users.map((user)=>{
    store.innerHTML += `
        <tr>
            <td>${user.empid}</td>
            <td>${user.empname}</td>
            <td>${user.empcompany}</td>
            <td>${user.empsalary}</td>
            <td>${user.empaddress.empcity}</td>
            <td>${user.empaddress.emparea}</td>
        </tr>
    `
});