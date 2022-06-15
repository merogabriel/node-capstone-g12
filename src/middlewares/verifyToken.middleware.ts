import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
// import { ErrorHandler } from "../errors";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Missing Token" });
  }
  console.log(token);

  verify(token, process.env.SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "Invalid Token" });
    }
    if (decoded.email) {
      req.body.user = decoded.email;
      next();
    }
    if (decoded.cnpj) {
      req.body.company = decoded.cnpj;
      next();
    }
  });
};

export default verifyToken;
