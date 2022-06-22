import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";
import { errorHandler } from "../../errors";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const deletedUser = await deleteUserService(user);

    return res.status(deletedUser.status).json(deletedUser.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default deleteUserController;
