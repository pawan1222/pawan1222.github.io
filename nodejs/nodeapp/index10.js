import jwt from "jsonwebtoken"
const SECRET = "something"

const user = {
    name: "john",
    email: "john@gmail.com",
    rile: "admin"
}

const token = jwt.sign(user,SECRET,{expiresIn:'1h'});
console.log(token);


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyaWxlIjoiYWRtaW4iLCJpYXQiOjE3NTE2MDQ5NTUsImV4cCI6MTc1MTYwODU1NX0.a8btgFZQt3OQlzQ0Onjv7uHoRl1lrDy78YSJ2Y4GlsY"
// const decoded = jwt.verify(token,SECRET);
// console.log(decoded);