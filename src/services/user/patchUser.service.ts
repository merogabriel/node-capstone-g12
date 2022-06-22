import { IUserUpdate } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { Address, Courses, User } from "../../entities";

const patchUserService = async ({ email, address, courses }: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);
  const coursesRepository = AppDataSource.getRepository(Courses);
  const user = await userRepository.findOneBy({ email: email });

  if (address) {
    const findAddress = await addressRepository.findOne({
      where: {
        state: address,
      },
    });

    if (!findAddress) {
      return {
        status: 404,
        message: { message: `State not found` },
      };
    }
    user.address = findAddress;
  }

  if (courses) {
    const allCurses = user.courses;
    courses.forEach(async (course) => {
      const findCourse = await coursesRepository.findOne({
        where: {
          name: course,
        },
      });
      allCurses.push(findCourse);
    });
    user.courses = allCurses;
  }

  await userRepository.save(user);

  const getUser = await userRepository.findOneBy({ email: email });
  return {
    status: 200,
    message: getUser,
  };
};

export default patchUserService;
