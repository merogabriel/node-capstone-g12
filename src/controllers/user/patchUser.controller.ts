import { Request, Response } from "express";
import patchUserService from "../../services/user/patchUser.service";
import { errorHandler } from "../../errors";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const email = req.body.user;
    const { courses, address } = req.body;
    const updatedUser = await patchUserService({ email, address, courses });

    return res.status(updatedUser.status).json(updatedUser.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default updateUserController;
