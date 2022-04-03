let arr=["hello1","heelo2","hello3"];
arr.forEach((element,index)=>{
    console.log(element);
})
for(let element of arr){
    console.log(element);
}
let obj={
    "key1":"value1",
    "key2":"value2",
    "key3":"value3",
};
for(let key in obj){
    console.log(obj[key]);
}