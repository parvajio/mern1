import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();

app.post("/products", async(req, res)=>{
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

app.get("/", (req, res) => {
  res.send("server maybe running");
});


app.listen(5000, () => {
  connectDB()
  console.log("listenning");
});
