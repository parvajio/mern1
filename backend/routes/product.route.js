import express from "express"
import Product from "../models/product.model.js";

const router = express.Router();

router.post("/", async(req, res)=>{
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
  
  router.get("/", async(req, res)=>{
    try{
      const products = await Product.find({});
      res.status(200).json({success: true, data: products})
    }catch(error){
      res.status(500).json({success: false, message: "server error"})
    }
  })
  
  router.delete('/:id', async(req, res)=>{
    const {id} = req.params;
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({success: true, message: "successfullhy deleted a product"})
    } catch (error) {
      res.status(404).json({success: false, message: "the product not found"})
    }
  })
  
  router.put('/:id', async(req, res)=>{
    const {id} = req.params;
    const product = req.body;
  
    try{
      const updatedProduct = await Product.findByIdAndUpdate(id, product,{new : true});
      res.status(200).json({success: true, data: updatedProduct})
    }catch(err){
      res.status(500).json({success: false, message: "server error"})
    }
  })

export default router;