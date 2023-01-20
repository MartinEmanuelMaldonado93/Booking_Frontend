import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom);
// GET
router.get("/", getRooms);
router.get("/:id", getRoom);

export default router;
