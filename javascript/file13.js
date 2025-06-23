// spread operator

const marks ={
    English: 20,
};

const newmarks={...marks,maths:30};
console.log(newmarks);
console.log(marks);

let student = ['aryan', 'khushi']

const newstudent=[...student,"aman"];
console.log(newstudent);
console.log(student);