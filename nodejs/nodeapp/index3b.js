import http from 'http'


let server= http.createServer((req,res)=>{
    res.end("Good evening...");
});


server.listen(8082,()=>{
    console.log("server started");
});
