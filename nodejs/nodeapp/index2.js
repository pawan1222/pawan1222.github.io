import fs from 'fs'

fs.writeFile("myfile.txt","Hello world", (err)=>{
    if(err) throw err;
});

fs.appendFile("myfile.txt","Hello world\n", (err)=>{
    if(err) throw err;
});

fs.readFile("about.txt", "utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})

fs.rename("myfile.txt","newFile.txt",(err)=>{
    if(err) throw err;
})

fs.unlink("newFile.txt",(err)=>{
    if(err) throw err;
})