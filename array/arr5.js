let arr=[10,20,30,40,50];
console.log(arr.findIndex((element,index)=>{return element==50;})
);
console.log(arr.findIndex((element,index)=>{return element==60;})
);
arr.splice(arr.findIndex((element,index)=>{return element==30;}),1)
console.log(arr);

console.log(arr.find((element,index)=>{return element==50;})
);
console.log(arr.find((element,index)=>{return element==60;})
);
