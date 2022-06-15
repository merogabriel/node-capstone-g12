import { ILogin } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities";
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
    return {
      status: 400,
      message: error,
    };
  }
  if (!user) {
    return {
      status: 404,
      message: "User not found",
    };
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return {
      status: 401,
      message: "Wrong email/password",
    };
  }

  const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
    expiresIn: process.env.EXPIRES_IN,
  });
  return {
    status: 200,
    message: token,
  };
};

export default loginUserService;
