import { Vacancy } from "../../entities/Vacancy";
import { AppDataSource } from "../../data-source";

const createVacancyService = async ({
  name,
  description,
  isActive,
}: Partial<Vacancy>) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);

  const newVacancy = new Vacancy();
  newVacancy.description = description;
  newVacancy.name = name;
  newVacancy.isActive = isActive;

  vacancyRepository.create(newVacancy)
  await vacancyRepository.save(newVacancy)

  return newVacancy
};

export default createVacancyService;
