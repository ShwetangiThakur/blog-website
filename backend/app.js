import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  // Corrected MongoDB connection string for your local database
  .connect("mongodb://localhost:27017/mern-blog")
  .then(() => {
    app.listen(5000);
    console.log("Connected to Database and listening on port 5000");
  })
  .catch((err) => console.log(err));