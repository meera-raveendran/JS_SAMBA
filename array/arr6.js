// let arr=[10,20,30,40,50];
// console.log(arr.includes(30));
// console.log(arr.includes(90));
let arr=[10,20,30,40,50];
console.log(arr.some((element,index)=>{return element>=50;}));
console.log(arr.some((element,index)=>{return element>50;}));
console.log(arr.every((element,index)=>{return element>=10;}));
console.log(arr.every((element,index)=>{return element>10;}));