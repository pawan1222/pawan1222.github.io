// function argument and return

// function greet(student){
//     console.log(`Hello ${student}`)
// }
// greet("subhash")

// function add(a,b){
//     return a+b
// }
// let result=add(4,5);
// console.log(result);

function add(){
    console.log(arguments)
    console.log(arguments.length)
}
add(1,2,3,4,5)