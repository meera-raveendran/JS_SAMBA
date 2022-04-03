let arr1=[1,2,3,4,5];
let arr2=["one","two","three","four","five"];
console.log(arr1.map((element,index)=>{return [element,arr2[index]]}));
console.log(arr1.map((element,index)=>{return [element,arr2[index]]}).flat(1));  
//    //[ 1, 'one',
//     2, 'two',
//     3, 'three',
//     4, 'four',
//     5, 'five'
//   ] 
console.log(arr1.flatMap((element,index)=>{return [element,arr2[index]]}));
[
    1, 'one',
    2, 'two',
    3, 'three',
    4, 'four',
    5, 'five'
  ]

