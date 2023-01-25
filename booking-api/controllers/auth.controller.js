import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    next(error);
  }
};
/** Login use cookies once the user is registered */
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });
    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Password incorrect. Try again!"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    //console.log(token);
    const { password, isAdmin, ...otherDetails } = user._doc;
    // console.log(user._doc);
    res
      .cookie("access_token", token, {
        httpOnly: false,
      })
      .status(200)
      .json({ ...otherDetails });
    //console.log(res.cookie.access_token);
  } catch (error) {
    next(error);
  }
};
