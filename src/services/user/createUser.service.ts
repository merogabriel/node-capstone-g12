import { IUserCreate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { Address, Courses, User } from "../../entities";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
  age,
  courses,
  address,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);
  const coursesRepository = AppDataSource.getRepository(Courses);
  const userExist = await userRepository.findOneBy({ email: email });
  const findAddress = await addressRepository.findOne({
    where: {
      state: address.toUpperCase(),
    },
  });

  const errors = [];
  if (!name) {
    errors.push("name is a required field");
  }
  if (!email) {
    errors.push("email is a required field");
  }
  if (!password) {
    errors.push("password is a required field");
  }
  if (!age) {
    errors.push("age is a required field");
  }
  if (!address) {
    errors.push("address is a required field");
  }
  if (errors?.length > 0) {
    return {
      status: 400,
      message: errors,
    };
  }

  if (userExist) {
    return {
      status: 409,
      message: { message: `Key (email)=(${email}) already exists.` },
    };
  }
  if (!findAddress) {
    return {
      status: 404,
      message: { message: `State not found` },
    };
  }
  const user = new User();
  user.name = name;
  user.age = age;
  user.email = email.toLowerCase();
  user.password = bcrypt.hashSync(password, 10);
  user.address = findAddress;
  user.isAdm = false;
  user.hired = false;

  const allCurses = [];
  courses.forEach(async (course) => {
    const findCourse = await coursesRepository.findOne({
      where: {
        name: course,
      },
    });
    allCurses.push(findCourse);
  });
  user.courses = allCurses;

  userRepository.create(user);
  await userRepository.save(user);
  return {
    status: 201,
    message: user,
  };
};

export default createUserService;
