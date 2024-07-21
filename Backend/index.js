// const express = require('express')
// const dotenv = require("dotenv")

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
// const port = 3000

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// app.get("/", (req, res) => {
//   res.send("BookStore App");
// });

//Connect to Mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// solve error - netstat -ano | findstr :4001       then        taskkill /PID <PID> /F
