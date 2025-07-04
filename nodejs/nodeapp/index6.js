import express from 'express'

const app=express()

app.listen(8080,()=>{
    console.log("server started at port 8080");
});

app.use(express.json());  // for capturing json data from body
app.post("/",(req,res)=>{     //use only post for send res from body
    res.send(req.body)
})
