// objects

const student={
    name:"devesh",
    age:22
}
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// student.city='jalandhar'
// console.log(student);
// student.city='Amritsar'   //here overwrite the value jalandhar as amritsar
// console.log(student);
// console.log(student.name);
// console.log(student["name"]);

// delete student.city
// console.log(student)

const keys=Object.keys(student);
console.log(keys);
// console.log(Object.keys(student))
const values=Object.values(student);
console.log(values)