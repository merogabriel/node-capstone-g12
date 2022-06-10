import { IUserCreate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
  age,
  courses = [],
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);
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
    throw new ErrorHandler(400, error);
  }
  if (emailAlreadyExists) {
    throw new ErrorHandler(409, `Key (email)=(${email}) already exists.`);
  }

  const user = new User();
  user.name = name;
  user.age = age;
  user.email = email.toLowerCase();
  user.password = bcrypt.hashSync(password, 10);
  user.courses = courses;
  user.isAdm = false;
  user.hired = false;

  userRepository.create(user);
  await userRepository.save(user);
  return user;
};

export default createUserService;
