//? Arrays
// const users = ["a","b","c","d","e"];
// console.log(users);
// console.log(users[0]);
// console.log(users[4]);
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }
// let x = users.map((users)=>{
//     return users;
// });
// console.log(x);
// let y = users.forEach((users)=>{
//     console.log(users);
// });
// console.log(y);

//? Methods in Array - push, pop, unshift, shift, reverse, join, concat
// const users = ["a","b","c","d","e"];
//&push
// users.push("gh");
// console.log(users);
//&pop
// users.pop();
// console.log(users);
//&unshift
// users.unshift("ij")
// console.log(users);
//&shift
// users.shift();
// console.log(users);
//&reverse
// console.log(users.reverse());
//&join
// console.log(users.join());
//or
// let x = users.join("")
// console.log(x, typeof(x))
//&concat
// let frontend = ["html","css","JS","ReactJs"];
// let backend = ["NodeJs","ExpressJs","Java"];
// let db = ["Mongodb","MySQL"];
// console.log(frontend);
// console.log(backend);
// console.log(db);
// let fullstack = frontend.concat(backend,db);
// console.log(fullstack);

//? Objects - is an entity used to store the values in the form of key and value pairs.
//? java is object oriented where as javascript is object based + OOPs. we dont need any creation of class for objects in javascript. Class can also be used in javascript but not like java.
// let obj = {
//     name : "Sri",
//     age : 19,
//     city : "Hyd",
//     address : { //nested object
//         area : "Nizampet",
//         street : {
//             streetNo : "1",
//             pincode : "500090"
//         }
//     }
// };
// console.log(obj);
// console.log(obj.address.street.pincode);
// console.log(obj.name);

//?Array of objects
let user1 = {
    name:"a",
    city:"USA"
}
let user2 = {
    name:"b",
    city:"Newyork"
}
let user3 = {
    name:"c",
    city:"India"
}
let user4 = {
    name:"d",
    city:"Korea"
}
let users = [
    {
        name:"a",
        city:"USA"
    },
    {
        name:"b",
        city:"Newyork"
    },
    {
        name:"c",
        city:"India"
    },
    {
        name:"d",
        city:"Korea"
    }
];
users.map((user)=>{
    console.log(user.name);
});