// Promise

// const f1=()=>{
//     setTimeout(() => {
//         return 5;
//     }, 1000);
// };

// const f2 =(x)=>{
//     console.log(x+6);
// };

// const n=f1()
// f2(n);

// const f1=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(5);
//     })
// };

// const f2 =(x)=>{
//     console.log(x+6);
// };

// f1().then((n)=>f2(n));



// const f1=()=>{
//     return new Promise((resolve,reject)=>{
//         // resolve(5);
//         reject("something went wrong");
//     })
// };

// const f2 =(x)=>{
//     console.log(x+6);
// };

// f1().then((n)=>f2(n))
// .catch(err=>console.log(err));


// const f1 = (a) => {
//     if (a > 0) {
//         return new Promise((resolve, reject) => {
//             resolve(a);

//         })
//     }
//     else {
//         return new Promise((resolve, reject) => {
//             reject("something went wrong");
//         })
//     }

// };

// const f2 = (x) => {
//     console.log(x + 6);
// };

// f1(-1).then((n) => f2(n))
//     .catch(err => console.log(err));


// const f1 = (a) => {
//     return new Promise((resolve,reject)=>{
//         if(a>0){
//             resolve(a);
//         }
//         else{
//             reject("something went wrong");
//         }
//     })

// };

// const f2 = (x) => {
//     console.log(x + 6);
// };

// f1(-1).then((n) => f2(n))
//     .catch(err => console.log(err));


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())     //re.json() also return resolve promise thats why we can use .then after it and .json() is a function that chance data into json formate
// .then(data=>{
//     data.forEach((value) => {
//         console.log(value.name, value.email);
//         // console.log(value.email);
//     });
// }).catch((err)=> console.log(err));


const fetchdata = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    data.forEach((value) => {
        console.log(value.name, value.email);
    });
}

fetchdata();