import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You aren't authenticated."));

  jwt.verify(token, proccess.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid."));
    req.user = user; // any property is allowed
    next();
  });
};
