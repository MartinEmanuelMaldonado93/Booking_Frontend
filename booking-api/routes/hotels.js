import express from "express";
import { createHotel, deleteHotel, getHotels, updateHotel } from "../controllers/hotel.controller.js";

const router = express.Router();

// CREATE 
router.post("/", createHotel);
// READ 
router.get("/", getHotels);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);

export default router;