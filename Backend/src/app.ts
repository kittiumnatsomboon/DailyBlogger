import express, { type Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectdatabase/database.js"
dotenv.config();

// app router
const app: Application = express();
connectDB();

// cors
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Typescript");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
