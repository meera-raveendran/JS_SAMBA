// console.log("meera".padStart(10,"*"));
// console.log("meera".padEnd(10,"*"));
// console.log("meera".padStart(10,"*").padEnd(13,"*"));
let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr.copyWithin(3));  //[
    10, 20, 30, 10, 20,
    30, 40, 50, 60, 70
//   ]
//   console.log(arr.copyWithin(7));  //[
  10, 20, 30, 40, 50,
  60, 70, 10, 20, 30
// ]

  console.log(arr.copyWithin(2,5));  //[
    10,  20, 60, 70,  80,
    90, 100, 80, 90, 100
  ]