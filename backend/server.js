import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();

app.use(express.json()); //allow to accept json data in the req.body

app.post("/api/products", async(req, res)=>{
  const product = req.body;

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false, message: "Please provide all fields"})
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  } catch (error) {
    console.error("Error is create product ", error.message);
    res.status(500).json({success:false, message: "server error"})
  }
})

// app.get("/api/products", async(req, res)=>{
//   try{
//     const products = Product.find({});
//     res.status(200).json({success: true, message:"get the products"})
//   }catch(error){
//     res.status(500).json({success: false, message: "server error"})
//   }
// })

app.delete('/api/products/:id', async(req, res)=>{
  const {id} = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "successfullhy deleted a product"})
  } catch (error) {
    res.status(404).json({success: false, message: "the product not found"})
  }
})

app.get("/", (req, res) => {
  res.send("server maybe running");
});


app.listen(5000, () => {
  connectDB()
  console.log("listenning");
});
