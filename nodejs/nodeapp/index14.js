import mongoose from 'mongoose'
import express from 'express'
const app = express()

mongoose.connect("mongodb://localhost:27017/lpu")
    .then(() => {
        app.listen(8080, () => {
            console.log("server started");
        });
    })


const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
})

const userModel = mongoose.model("User", userSchema)


app.get("/users", (req, res) => {
    res.json({});
})



app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const user = {
            name,
            email,
            password,
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