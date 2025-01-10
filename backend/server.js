import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import productRouter from "./routes/product.route.js"

const app = express();

app.use(express.json()); //allow to accept json data in the req.body

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("server maybe running");
});

const port = process.env.PORT

app.listen(port, () => {
  connectDB()
  console.log("listenning",port);
});
