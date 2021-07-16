import { Request, Response } from "express";

function validateUser(req: Request, res: Response, next: Function) {
  try {
    const { authorization } = req.headers;
    const { userId } = req.params;
    const token: string | undefined = authorization?.split(" ")[1];
    // @ts-ignore: Unreachable code error
    const decoded = jwt.verify(token, JWT_SECRET);
    if (userId !== decoded.user.id) {
      throw new Error("User id does not match!");
    }
    next();
  } catch (e) {
    return next(e);
  }
}

export default validateUser;
