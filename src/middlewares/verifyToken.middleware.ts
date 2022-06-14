import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { User } from "../entities/User";
// import { ErrorHandler } from "../errors";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[0];
  if (!token) {
    return res.status(401).json({ error: "Missing Token" });
  }  
  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      if (err) {
        return res.status(401).json({ error: "Missing Token" });
      }

      req.decoded = decoded as User;
      return next();
    }
  );
};

export default verifyToken;