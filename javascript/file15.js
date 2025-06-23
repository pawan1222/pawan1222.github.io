// JSON - javascript object notation 

// const student={
//     name:"omil",
//     age:21
// };
// console.log(JSON.stringify(student));   //it convert data into string

const student='{"name":"omil","age":21}'
const newstudent=JSON.parse(student);    //it convert data string to its original datatype
console.log(newstudent);
console.log(newstudent.name);
