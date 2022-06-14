import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { User } from "../../entities";

const deleteUserService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return {
      status: 404,
      message: { message: `User not found.` },
    };
  }

  await userRepository.delete(user.id);
  return {
    status: 204,
    message: {},
  };
};

export default deleteUserService;
