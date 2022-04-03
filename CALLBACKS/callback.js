// function fun_one(param1){
// console.log(param1());
// };
// function fun_two(){
//  return "hello1";
// };
// fun_one(fun_two);


// function fun_one(param1,param2,param3){
// console.log(param1(),param2(),param3());
// };
// fun_one(
//     function  fun_two(){
//         return"hello1";
//     },
//     function fun_three(){
//         return"hello2";
//     },
//     function fun_four(){
//         return"hello3";
//     });


// function fun_one(param1,param2,param3){
//     console.log(param1(),param2(),param3());

// };
// fun_one(()=>{return"hello1";},()=>{return"hello2";},()=>{return"hello3";})


let fun_one=(param1)=>{
return param1("hello1","hello2","hello3")
};
fun_one((arg1,arg2,arg3)=>{
    console.log(arg1,arg2,arg3);
})