// callback function
// let f1 = () => {
//     console.log("this is function");
// };
// let main = (x) => {
//     x(); // call the function passed as argument
// };
// main(f1); // pass f1 to main



let f1=(x)=>{
    console.log(x)
}

const main=()=>f1(5);
main();
console.log(typeof main)