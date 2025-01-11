//decision making statements 
//if, if-else, else if ladder, switch, ternary condition

//if
// if(true){
//     console.log("if log is executing.")
// }

// if(false){
//     console.log("if log is executing.")
// }

// //if-else
// let age = 18;
// if(age >= 18){
//     console.log("eligible for voting")
// }else{
//     console.log("not eligible for voting")
// }

// //else if ladder
// // let day = 1;
// let day = prompt("enter a day: ");
// if(day == 1){
//     console.log("Sun")
// }else if(day == 2){
//     console.log("Mon")
// }else if(day == 3){
//     console.log("Tue")
// }else if(day == 4){
//     console.log("Wed")
// }else if(day == 5){
//     console.log("Thu")
// }else if(day == 6){
//     console.log("Fri")
// }else if(day == 7){
//     console.log("Sat")
// }else{
//     console.log("Invalid day")
// }

//switch
let day = prompt("enter a day: ");
switch(day) {
    case 1:
        console.log("Sun");
        break;
    case 2:
        console.log("Mon");
        break;
    case 3:
        console.log("Tue");
        break;
    case 4:
        console.log("Wed");
        break;
    case 5:
        console.log("Thu");
        break;
    case 6:
        console.log("Fri");
        break;
    case 7:
        console.log("Sat");
        break;
    default:
        console.log("Invalid day")
        break;
}

