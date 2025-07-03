import http from 'http'




let server= http.createServer((req,res)=>{
    res.end("good morning...");
});




server.listen(8081,()=>{
    console.log("server started");
});
