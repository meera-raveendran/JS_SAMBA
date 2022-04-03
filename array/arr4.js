// console.log(
// ["UI","TO","WELCOME"].reduceRight((firstElement,nextElement)=>{return firstElement+" "+nextElement;}))
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr.slice(2,5));
// console.log(arr.slice(0,1))
// ;
// console.log(arr.slice(-6,-2));
// let arr=[1,2,3,4,5];
// let arr1=[...arr,6,7,8,9,10];
// console.log(arr1);
// let x1=[1,2,3,4,5];
// let y1=[6,7,8,9,10];
// let z1=[...x1,...y1];
// console.log(z1);
let arr=[1,2,3,4];
let x1=arr.slice(0,2);
console.log(x1);
// console.log(arr.filter(element,index)=>{return element>=3;}));
let y1=arr.filter((element,index)=>{return element>=3 ;});
console.log(y1);
let z1=[...y1,...x1];
console.log(z1);
   
