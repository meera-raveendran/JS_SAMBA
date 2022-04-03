let arr=[10,20,30,40,50];
console.log(arr.reverse());  //[ 50, 40, 30, 20, 10 ]
let arr1=["hello1","hello2","hello3"];
console.log(arr1.reverse()); //[ 'hello3', 'hello2', 'hello1' ]  //to reverese array
console.log(Array.from("hello"));  //[ 'h', 'e', 'l', 'l', 'o' ] //to convert string to array
console.log(Array.from("hello").reverse()); //[ 'o', 'l', 'l', 'e', 'h' ] //reverse
console.log(Array.from("hello").reverse().toString()); //o,l,l,e,h //convert array to string
console.log(Array.from("hello").reverse().toString().replace(",","")); //ol,l,e,h //to remove comma
console.log(Array.from("hello").reverse().toString().replaceAll(",","")); //olleh //remove all commas
console.log(Array.from("meera").reverse().toString().replaceAll(",",""));

