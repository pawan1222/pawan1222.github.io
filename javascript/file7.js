// arrays

const score = [1,2,3,4,5]
console.log(score)

console.log(score[0])
score.push(7)
console.log(score)
console.log(score.length)

for(let i=0;i<score.length;i++){
    console.log(score[i]);
}

let value = [10, 20, 30, 40];    //print in same line
console.log(value.join(" "));

for (let i = 0; i < score.length; i++) {
  process.stdout.write(score[i] + " ");
}