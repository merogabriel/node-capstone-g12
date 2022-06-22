import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities/Vacancy";
import { Candidate } from "../../entities/Candidates";
import { Company } from "../../entities";

const createVacancyService = async ({
  name,
  description,
  isActive,
  company,
}: Partial<Vacancy>) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const cadidatesRepository = AppDataSource.getRepository(Candidate);
  const companyRepository = AppDataSource.getRepository(Company);
  const Companys = await companyRepository.find();
  const cnpjAlreadyExists = Companys.find(
    (Company) => Company.cnpj === String(company)
  );

  const newCadidates = new Candidate();
  const novaCandidatos = cadidatesRepository.create(newCadidates);
  await cadidatesRepository.save(novaCandidatos);

  const newVacancy = new Vacancy();

  newVacancy.company = cnpjAlreadyExists;
  newVacancy.description = description;
  newVacancy.name = name;
  newVacancy.isActive = isActive;

  newVacancy.cadidate = novaCandidatos;

  const novaVacancy = vacancyRepository.create(newVacancy);
  await vacancyRepository.save(novaVacancy);

  return novaVacancy;
};

export default createVacancyService;
