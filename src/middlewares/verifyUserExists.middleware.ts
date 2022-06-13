import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { Equal } from "typeorm";
import { AppDataSource } from "../data-source";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const checkEmail = await userRepo.findOneBy({
    email: Equal(req.body.email),
  });
  if (checkEmail) {
    return res.status(409).json({ error: "Email already exists" });
  }

  return next();
};

export default verifyUserExists;
