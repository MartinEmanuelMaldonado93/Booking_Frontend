import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js";
import Hotel from "./models/Hotel.js";

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
// middleware
app.use(express.json());
// Create the routes 

// app.use("/api/auth", authRoute);
// app.use("/api/users", authRoute);
app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", authRoute);

app.use((err, req, res, next) => {
    // console.log("hi im middleware");
    // next();
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

const PORT = 8800;
app.listen(PORT, () => {
    connect();
    console.log(`Running on port  http://localhost:${PORT}`);
});
