import mongoose from "mongoose";
import express from "express";
import userRouter from "./userRoute.js"
const app = express();
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});
app.use(express.json());
app.use("/api/users", userRouter);