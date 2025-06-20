// arrow functions

// function greet(){
//     console.log("good morning")
// }

// const greet = () =>{
//     console.log("this is arrow function")
// }
// greet()



// hoisting is not work in arrow function
// greet()
// const greet = () =>{
//     console.log("this is arrow function")
// }


// const add=(a,b)=>{
//     return a+b
// }
// const result=add(4,5);
// console.log(result);

function add(...args){   //spread operators
    console.log(args)
}
add(1,2,3,4,5)