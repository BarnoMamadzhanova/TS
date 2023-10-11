"use strict";
// Basic ex 1
// let numArr : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=1; i < 11; i++) {
//     for(let j=1; j <11; j++){
//         let result = i*j;
//         document.write(`${[i]}x${j} = ${result} <br>`)
//     }
// }
// Basic ex 2
// const myName: {fName: string, lName: string} = {
//     fName: "Barno",
//     lName: "Mamadzhanova"
// };
// document.write(`Full name: ${myName.fName} ${myName.lName}`)
// let names: {fName: string; lName: string}[] = [
//     {fName: "Barno", lName: "Mamadzhanova"},
// ];
// names.forEach(name => {
//     document.write(`${name.fName}<br>${name.fName} <br>${name.fName} <br>${name.fName} <br>${name.fName} <br>${name.fName}<br> ${name.fName} <br>${name.fName} <br>${name.fName}<br> ${name.fName}`);
// });
// let lname: string = "Mamadzanova";
// function typeName() {
//     for(let i = 1; i < 11; i++){
//         console.log(`${i} ${lname}`);
//     }
// }
// setTimeout(typeName, 5000);
// Basic ex 3
// const names: readonly string[] = ["Dylan", "Anna", "Sara", "Sam", "Mark"];
// for(let value of names) {
//     console.log(value);
// }
// for (let key in names){
//     console.log(key);
// }
// for (let [index, value] of Object.entries(names)){
//     console.log(value, index);
// };
