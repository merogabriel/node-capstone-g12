import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";

const deleteVacancy = async (uuid: string) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  vacancyRepository.delete(uuid);
  if (!vacancyRepository) {
    return false;
  }
  return true;
};

export default deleteVacancy;
