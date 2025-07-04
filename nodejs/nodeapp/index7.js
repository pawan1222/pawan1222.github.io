import express from 'express'

const app = express()

app.listen(8080, () => {
    console.log("server started at port 8080");
});


app.use(express.json());

let products = [];
// app.post("/",(req,res)=>{    
//     products.push(req.body);
//     res.send("product created")
// })

// app.post("/", (req, res) => {
//     const { id, name, price } = req.body;
//     const found = products.find(products => products.id === id)
//     if (found) res.send("Product Already Exist")
//     else {
//         products.push(
//             {
//                 id,
//                 name,
//                 price,
//             }
//         )
//     }
//     res.send("product created");
// })

app.post("/", (req, res) => {
    try {
        const { id, name, price } = req.body;
        const found = products.find(products => products.id === id)
        if (found) res.send("Product Already Exist")
        else {
            products.push(
                {
                    id,
                    name,
                    price,
                }
            )
        }
        res.send("product created");
    } catch (error) {
        res.status(400).json({ message: "something went wrong" });
    }
})

app.get("/", (req, res) => {
    res.json(products);
})



app.delete("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        products = products.filter((value) => value.id !== id);
        res.json("Product deleted");
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
});



app.patch("/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, price } = req.body;
        const product = products.find(product => product.id === id);

        if (!product) {
            return res.json({ message: "Product not found" });
        }
        if (name !== undefined) {
            product.name = name;
        }
        if (price !== undefined) {
            product.price = price;
        }
        res.json({message: "updated successfully"});

    } catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
});
