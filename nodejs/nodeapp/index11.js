import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
const SECRET = "something"

const app = express();


app.listen(8080, () => {
    console.log("server created");
})

const users = [{
    email: "john@gmail.com",
    pass: "1234",
    role: "user"
},
{
    email: "cathy@gmail.com",
    pass: "1234",
    role: "admin"
}]

app.use(express.json());
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        token = token.split(" ")[1];
        const user = jwt.verify(token, SECRET)
        req.role = user.role;
        next();

    } catch (error) {
        return res.status(400).json({ message: "invalid user" });
    }
}

const authorize = (role)=>{
    return (req,res,next)=>{
        if(req.role == "admin"){
            next()
        }
        else{
            return res.status(403).json({message:"Unotherized access"})
        }
    }
}



app.post("/login", (req, res) => {
    const { email, pass } = req.body;
    const found = users.find(user => user.email == email && user.pass == pass);

    if (found) {
        const token = jwt.sign(found, SECRET, { expiresIn: '1h' });
        res.status(200).json({ user: found, token });
    }
    else {
        res.status(403).json({ message: "Access Denied" })
    }
})

// store email, bycripted password,role in Array
app.post("/register",async (req,res)=>{
    const {name, email,pass,role} = req.body;
    const hashedpwd =await bcrypt.hash(pass,SECRET)

})



app.get("/users", authenticate,authorize("admin"), (req, res) => {
    res.json(users);
})