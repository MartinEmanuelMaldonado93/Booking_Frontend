import express from "express";
import { createHotel, deleteHotel, getHotels, updateHotel } from "../controllers/hotel.controller.js";

const router = express.Router();

// CREATE 
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);
//GET 
router.get("/", getHotels);

export default router;