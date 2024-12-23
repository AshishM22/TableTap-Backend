import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

console.log("Hi Bye");

app.listen(PORT, () => console.log("Server is running on port " + PORT));