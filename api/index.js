import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO, {});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");

  // Start your server or perform other actions after successful connection
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
