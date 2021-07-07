import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { JWT_SECRET } = process.env;

const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;
  const token: string | undefined = authorization?.split(" ")[1];
  try {
    // @ts-ignore: Unreachable code error
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    res.status(401).json({
      message: "Unauthorized, Token required to access this route",
    });
  }
};

export default isAuthenticated;
