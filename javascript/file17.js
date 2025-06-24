// closure

// function main(){
//     let b=1
//     function sub(){   //sub function have access of parent function
//         return b
//     }
//     return sub
// }

// let f1= main();
// console.log(f1());

function main(){
    let b=1
    function sub(){  
        return b++
    }
    return sub
}

let f1= main();
console.log(f1());
console.log(f1());
console.log(f1());