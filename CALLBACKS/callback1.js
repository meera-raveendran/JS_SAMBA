let add=(num,callback)=>{
return callback(num+5,false);
}
add(5,(addres,error)=>{
    if(!error){
    console.log(addres);}
});