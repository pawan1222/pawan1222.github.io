// array methods

// const score=[2,3,1,7,4];
// // score.forEach(element => {
// //     console.log(element)
// // });

// score.forEach((value,index,arr) => {
//     console.log(value, index,arr)
// });

// score.forEach((value,index,arr) => {
//     console.log(arr[index])
// });


//array methods
// const points = [2, 5, 3, 2, 1, 8];
// const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }
// // points.forEach((value) => {
// //   console.log(value);
// // });
// // points.forEach((value, index) => {
// //   console.log(value,index);
// // });
// // points.forEach((value, index, arr) => {
// //   console.log(value, index, arr);
// // });
// points.forEach((a, b, c) => {
// //   console.log(c[b]);
//   console.log(a);
// });

// points.forEach((value, index, arr) => {
//   console.log(index);
// });

const points = [2, 5, 3, 2, 1, 8];

// const newarr=points.map((value)=>{
//     return (value+=5);
// })
// console.log(newarr);


const newarr=points.map((value)=>{
    return (value>5);
})
console.log(newarr); //store boolean like true and false

// const newarr=points.filter((value)=>{
//     return value>2;
// })
// console.log(newarr);

// const result=points.find((value)=>{
//     return value>2;
// })
// console.log(result);


// const result=points.reduce((sum,value)=>{
//     return sum+value;
// })
// console.log(result);