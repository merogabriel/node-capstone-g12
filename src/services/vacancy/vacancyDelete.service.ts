import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";

const deleteVacancy = async (uuid: string) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  try {
    await vacancyRepository.delete(uuid);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default deleteVacancy;
