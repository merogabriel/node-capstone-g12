import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";

const listVacancies = async () => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  return await vacancyRepository.find();
};

export default listVacancies;
