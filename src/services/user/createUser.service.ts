import { IUserCreate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExist = await userRepository.findOneBy({ email: email });

  const error = [];
  if (!name) {
    error.push("name is a required field");
  }
  if (!email) {
    error.push("email is a required field");
  }
  if (!password) {
    error.push("password is a required field");
  }
  if (!age) {
    error.push("age is a required field");
  }
  if (error.length > 0) {
    return {
      status: 400,
      message: error,
    };
  }
  if (userExist) {
    return {
      status: 409,
      message: { message: `Key (email)=(${email}) already exists.` },
    };
  }

  const user = new User();
  user.name = name;
  user.age = age;
  user.email = email.toLowerCase();
  user.password = bcrypt.hashSync(password, 10);
  // user.courses = courses;
  user.isAdm = false;
  user.hired = false;

  userRepository.create(user);
  await userRepository.save(user);
  return {
    status: 201,
    message: user,
  };
};

export default createUserService;
