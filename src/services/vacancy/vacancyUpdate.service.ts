import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities";

const updateVacancyProprietsService = async (request: Request) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const reference = request.params.vacancyId;
  const body = request.body;

  await vacancyRepository.update(reference, { ...body });
  const updateVacancy = vacancyRepository.findOne({
    where: { vacancyUuid: reference },
  });

  return updateVacancy;
};

export default updateVacancyProprietsService;

/* const userRepository = AppDataSource.getRepository(User);
  await userRepository.update(user.id, { ...body });
  const updatedUser = await userRepository.findOne({
    where: { id: user.id },
  });
 */
