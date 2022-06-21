import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";
import { Candidate } from "../../entities/Candidates";

const createVacancyService = async ({
  name,
  description,
  isActive,
}: Partial<Vacancy>) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const cadidatesRepository = AppDataSource.getRepository(Candidate);

  const newCadidates = new Candidate();
  const novaCandidatos = cadidatesRepository.create(newCadidates);
  await cadidatesRepository.save(novaCandidatos);

  const newVacancy = new Vacancy();

  newVacancy.description = description;
  newVacancy.name = name;
  newVacancy.isActive = isActive;

  newVacancy.cadidate = novaCandidatos;

  const novaVacancy = vacancyRepository.create(newVacancy);
  await vacancyRepository.save(novaVacancy);

  return novaVacancy;
};

export default createVacancyService;
