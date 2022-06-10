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

  const newVacancy = new Vacancy();
  newVacancy.description = description;
  newVacancy.name = name;
  newVacancy.isActive = isActive;

  newCadidates.vacancy = newVacancy;
  newVacancy.cadidate = newCadidates;

  vacancyRepository.create(newVacancy);
  cadidatesRepository.create(newCadidates);

  await vacancyRepository.save(newVacancy);
  await cadidatesRepository.save(newCadidates);

  return { newVacancy, newCadidates };
};

export default createVacancyService;
