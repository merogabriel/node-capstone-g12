import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities/user.entity";

const deleteUserService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new ErrorHandler(404, "user not found");
  }

  await userRepository.delete(user.id);
  return {};
};

export default deleteUserService;
