import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import { errorHandler } from "../../errors";

const createUserController = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { name, email, password, age, courses } = req.body;
    const newUser = await createUserService({
      name,
      email,
      password,
      age,
      courses,
    });
    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default createUserController;
