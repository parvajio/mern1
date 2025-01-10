import express from "express"
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controller/product.control.js";

const router = express.Router();

router.post("/", createProduct)
  
  router.get("/", getProduct)
  
  router.delete('/:id', deleteProduct)
  
  router.put('/:id', updateProduct)

export default router;