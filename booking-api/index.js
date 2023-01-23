import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const PORT = 8800;
dotenv.config();
const app = express();

mongoose.connection.on("connected", () => console.log("mongoDB connected !"));
mongoose.connection.on("disconnected", () =>
  console.log("mongoDB disconnected !")
);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Create the routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// handling errors
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong.";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Running on port  http://localhost:${PORT}`);
});

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
}
