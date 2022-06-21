import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";
import { Candidate } from "../../entities/Candidates";
import { User } from "../../entities";

const createVacancyService = async ({
  name,
  description,
  isActive,
}: Partial<Vacancy>) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const cadidatesRepository = AppDataSource.getRepository(Candidate);

  const newCadidates = new Candidate();

  const newVacancy = new Vacancy();
  newVacancy.description = description;
  newVacancy.name = name;
  newVacancy.isActive = isActive;

  newVacancy.cadidate = newCadidates;

  const novaVacancy = await vacancyRepository.save(newVacancy);
  const novaCandidatos = await cadidatesRepository.save(newCadidates);

  return novaVacancy;
};

export default createVacancyService;
