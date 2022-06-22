import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities";

const updateVacancyProprietsService = async (request: Request) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const reference = request.params.vacancyId;
  const { description, isActive } = request.body;

  await vacancyRepository.update(reference, { description, isActive });
  const updateVacancy = vacancyRepository.findOne({
    where: { vacancyUuid: reference },
  });

  return updateVacancy;
};

export default updateVacancyProprietsService;
