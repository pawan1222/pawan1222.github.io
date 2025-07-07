import express from 'express'

const app= express()

app.listen(8080,()=>{
    console.log("server started");
});

app.get("/",(req,res)=>{
    res.send("Hello world");
});


app.get("/products",(req,res)=>{
    // res.send("Product List");
    res.status(201).json({"id":1,"name":"product 1", price:25});   // for json response use res.json , // status(201) send specificily
});

app.get("/ab*cd",(req,res)=>{    //* means we can use any thing in url like localhost:8080/abuhduinducd
    res.send("Hello");
});

// localhost:8080/**** 
app.get("/:name",(req,res)=>{     //use colon and after /giving any thing by default come on this api
    res.send("good morning")
})


app.get("/:name",(req,res)=>{
    res.send(req.params.name);    // it send res whatever you gave in url after / , name is like a varible
})

app.get("/name/:name",(req,res)=>{
    res.send(req.params.name);   
})

app.get("/:name/:age",(req,res)=>{
    res.send(req.params.name + req.params.age);   
})

app.get("/name/:name/age/:age",(req,res)=>{
    res.send(req.params.name + req.params.age);   
})


// localhost:8080/name
app.get("/name",(req,res)=>{
    res.send("good morning")
})

// localhost:8080/?name=john
app.get("/",(req,res)=>{
    res.send(req.query.name);
})


app.get("/",(req,res)=>{
    res.send(req.header.authorization);
})

app.post("/",(req,res)=>{
    res.send("post request");
})

app.delete("/",(req,res)=>{
    res.send("delete request");
})

app.patch("/",(req,res)=>{
    res.send("patch request");
})