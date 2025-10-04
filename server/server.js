import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/connectDB.js";
import { clerkMiddleware } from "@clerk/express";

connectDB();
const app = express();
app.use(cors()); //enable cross-origin resorce sharing
//middleware
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Api is working"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
