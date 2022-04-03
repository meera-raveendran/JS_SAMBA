// let arr=[10,20,30,40,50]
// console.log(arr.fill(100));   //[ 100, 100, 100, 100, 100 ]

// console.log(arr.fill(200,2));   //[ 100, 100, 200, 200, 200 ]
// console.log(arr.fill(300,3,4)); //[ 100, 100, 200, 300, 200 ]
// let arr=[1,5,8,4,2,6,3,12];
// arr.sort((arg1,arg2)=>{return arg1-arg2});
// console.log(arr);
// arr.sort((arg1,arg2)=>{return arg2-arg1});
//  console.log(arr);
// let arr1=[1,8,6,-1,10,7,13,3]
//  console.log(arr1.sort((arg1,arg2)=>{return arg1-arg2})[1]);
//  console.log(arr1.sort((arg1,arg2)=>{return arg2-arg1})[1]);
// let arr=[10,20,30,10,20,30];
// arr.forEach((element,index)=>{console.log(arr.indexOf(element),index)});
let arr=[10,20,30,10,20,30];
console.log(arr.filter((element,index)=>{return arr.indexOf(element)===index}));

 

