// let name = "john"
// console.log("hello "+name)


// command line argument

// let name = process.argv[2]
// console.log("hello "+name)

// let name1 = process.argv[2]
// let name2 = process.argv[3]
// console.log("hello "+name1+name2)


import express from 'express';

const app = express();

const port = process.argv[2] || 8080;

app.get("/", (req, res) => {
  res.send("running");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
