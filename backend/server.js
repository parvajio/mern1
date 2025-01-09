import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("server maybe running");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("listenning");
});
