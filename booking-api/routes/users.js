import express from "express";
import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// GET
router.get("/:id", verifyAdmin, getUser);
// GET ALL
router.get("/", verifyAdmin, getUsers);
// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser);

export default router;
