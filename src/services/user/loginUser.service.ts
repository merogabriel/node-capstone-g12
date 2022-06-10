import { ILogin } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  const error = [];

  if (!email) {
    error.push("email is a required field");
  }
  if (!password) {
    error.push("password is a required field");
  }
  if (error.length > 0) {
    throw new ErrorHandler(400, error);
  }
  if (!user) {
    throw new ErrorHandler(404, `User not found`);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new ErrorHandler(401, "Wrong email/password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: process.env.EXPIRES_IN,
  });

  return token;
};

export default loginUserService;
