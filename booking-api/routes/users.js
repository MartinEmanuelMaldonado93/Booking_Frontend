import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (res, req, next) => {
  res.send("hello user!, you are logged in ");
});

// router.get("/checkuser/:id", verifyToken, (res, req, next) => {
//   res.send("hello user!, you are logged in, now you can delete your account");
// });
// READ
router.get("/", getUsers);
// UPDATE
router.put("/:id", updateUser);
// DELETE
router.delete("/:id", deleteUser);

export default router;
