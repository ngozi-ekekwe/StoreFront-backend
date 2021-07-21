import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

function validateUser(req: Request, res: Response, next: Function) {
  try {
    const { authorization } = req.headers;
    const { userId } = req.params;
    const token: string | undefined = authorization?.split(" ")[1];
    // @ts-ignore: Unreachable code error
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.user && parseInt(userId, 10) !== decoded.user.id) {
      res.status(401).json({
        message: "User id does not match!",
      });
    } else {
      next();
    }
  } catch (e) {
    return next(e);
  }
}

export default validateUser;
