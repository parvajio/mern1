import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import productRouter from "./routes/product.route.js"
import path from 'path'

const app = express();
const port = process.env.PORT

const __dirname = path.resolve()

app.use(express.json()); //allow to accept json data in the req.body

app.use("/api/products", productRouter);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/dist')))

  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend', "dist", "index.html"))
  })
}

app.get("/", (req, res) => {
  res.send("server maybe running");
});


app.listen(port, () => {
  connectDB()
  console.log("listenning",port);
});
