// import mongoose from 'mongoose'
// import express from 'express'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'

// const app = express()
// const SECRET = "kjdwkjd";
// mongoose.connect("mongodb://localhost:27017/lpu")
//     .then(() => {
//         app.listen(8080, () => {
//             console.log("server started");
//         });
//     })


// const userSchema = mongoose.Schema({
//     name: { type: String },
//     email: { type: String, unique: true },
//     password: { type: String },
//     role:{type:String}
// },
//     { timestamps: true }
// )

// const userModel = mongoose.model("User", userSchema)




// app.use(express.json());
// app.post("/register", async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;
//         const hashedpass = await bcrypt.hash(password, 10);
//         const user = {
//             name,
//             email,
//             password: hashedpass,
//             role
//         };
//         const result = await userModel.create(user);
//         res.status(201).json(result);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).json({ message: "something went wrong" })
//     }
// })

// const authenticate = (req, res, next) => {
//     try {
//         const token = req.headers.authorization;
//         token = token.split(" ")[1];
//         const user = jwt.verify(token, SECRET)
//         req.role = user.role;
//         next();

//     } catch (error) {
//         return res.status(400).json({ message: "invalid user" });
//     }
// }


// const authorize = (role)=>{
//     return (req,res,next)=>{
//         if(req.role == user.role){
//             next()
//         }
//         else{
//             return res.status(403).json({message:"Unotherized access"})
//         }
//     }
// }



// app.get("/users", authenticate, authorize, async (req, res) => {
//     try {
//         const result = await userModel.find();
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(err);
//         res.status(400).json({ message: "something went wrong" });
//     }
// })




// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await userModel.findOne({ email })
//         if (user) {
//             const ismatch = await bcrypt.compare(password, user.password)
//             if (ismatch) {
//                 const userObj = {
//                     name: user.name,
//                     email: user.email,
//                     role: user.role
//                 };
//                 const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" })
//                 res.status(200).json(userObj, token);
//                 console.log(token);
//             }
//             else {
//                 res.status(400).json({ message: "invalid password" })
//             }
//         }
//         else {
//             res.status(400).json({ message: "user not found" });
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({ message: "something went wrong" })
//     }
// })



//use router 

import mongoose from 'mongoose'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express()
const SECRET = "kjdwkjd";
mongoose.connect("mongodb://localhost:27017/lpu")
    .then(() => {
        app.listen(8080, () => {
            console.log("server started");
        });
    })

const userRouter = express.Router();
app.use("/api",userRouter);

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role:{type:String}
},
    { timestamps: true }
)

const userModel = mongoose.model("User", userSchema)




userRouter.use(express.json());
userRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedpass = await bcrypt.hash(password, 10);
        const user = {
            name,
            email,
            password: hashedpass,
            role
        };
        const result = await userModel.create(user);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "something went wrong" })
    }
})

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
        if(req.role == user.role){
            next()
        }
        else{
            return res.status(403).json({message:"Unotherized access"})
        }
    }
}



userRouter.get("/users", authenticate, authorize, async (req, res) => {
    try {
        const result = await userModel.find();
        res.status(200).json(result);
    } catch (error) {
        console.log(err);
        res.status(400).json({ message: "something went wrong" });
    }
})




userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (user) {
            const ismatch = await bcrypt.compare(password, user.password)
            if (ismatch) {
                const userObj = {
                    name: user.name,
                    email: user.email,
                    role: user.role
                };
                const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" })
                res.status(200).json(userObj, token);
                console.log(token);
            }
            else {
                res.status(400).json({ message: "invalid password" })
            }
        }
        else {
            res.status(400).json({ message: "user not found" });
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
})

