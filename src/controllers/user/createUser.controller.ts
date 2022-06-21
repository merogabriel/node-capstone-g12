import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import { errorHandler } from "../../errors";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age, courses, address } = req.body;
    const newUser = await createUserService({
      name,
      email,
      password,
      age,
      address,
      courses,
    });
    return res.status(newUser.status).send(newUser.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default createUserController;
