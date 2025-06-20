// array methods

const score=[2,3,1,7,4];
// score.forEach(element => {
//     console.log(element)
// });

score.forEach((value,index,arr) => {
    console.log(value, index,arr)
});

score.forEach((value,index,arr) => {
    console.log(arr[index])
});