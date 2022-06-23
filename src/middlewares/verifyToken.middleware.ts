import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Missing Token" });
  }

  verify(token, process.env.SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
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
