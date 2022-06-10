import { Request, Response } from "express";
import deleteUserService from "../../services/user/loginUser.service";
import { errorHandler } from "../../errors";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const deletedUser = await deleteUserService(email);

    return res.status(204).json({ deletedUser });
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default deleteUserController;
