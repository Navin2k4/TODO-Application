import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./route/auth.route.js";
import todoRoutes from "./route/todo.route.js";

dotenv.config();
// console.log(process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(express.json());

// /api/user/signup
app.use("/api/user", userRoutes);

app.use("/api", todoRoutes);

// CORS - Cross origin resource sharing

const PORT = 4000;

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
