import express from 'express'

const app = express()

const logger = (req,res,next)=>{
    req.message = "Logger"
    next();
}


// app.use(logger)
// app.get("/",(req,res)=>{
//     res.send(req.message);
// })

// or

app.get("/",logger,(req,res)=>{   // logger function call directly in between thats why app.use() is called middleware
    res.send(req.message);
})

app.listen(8080,()=>{
    console.log("server started")
})