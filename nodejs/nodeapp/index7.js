import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started");
});
app.use(express.json());
let products = [];
app.post("/", (req, res) => {
  try {
    const { id, name, price } = req.body;
    const found = products.find((product) => product.id === id);
    if (found) res.send("Product Already Exists");
    else {
      products.push({
        id,
        name,
        price,
      });
      res.status(201).json({ message: "Product created" });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get("/", (req, res) => {
  res.json(products);
});

app.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    products = products.filter((value) => value.id !== id);
    res.json("Product deleted");
  } catch (err) {
    res.json({ message: "Something went wrong" });
  }
});
