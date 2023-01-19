import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();

const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO);
        // console.log("Connected to mongoDB key:", process.env.MONGO);
    } catch (error) {
        // console.log(error);
        throw error;
    }
};

mongoose.connection.on("connected", () => console.log("mongoDB connected !"));
mongoose.connection.on("disconnected", () => console.log("mongoDB disconnected !"));

app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);
app.use("/api/hotels", authRoute);
app.use("/api/rooms", authRoute);

const PORT = 8800;
app.listen(PORT, () => {
    connect();
    console.log(`Running on port  https://192.168.1.36:${PORT}`);
});
