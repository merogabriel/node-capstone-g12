import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company, Vacancy } from "../../entities";

const getByNameCompanyService = async (name: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const vacancyRepository = AppDataSource.getRepository(Vacancy);

  const company = await companyRepository.findOne({
    where: {
      name: name,
    },
  });
  if (!company) {
    return {
      status: 404,
      message: { message: `Company not found.` },
    };
  }
  const vacancies = await vacancyRepository.find();
  const filterVac = vacancies.filter((vac) => vac.company.name === name);
  console.log(filterVac);
  return {
    status: 200,
    message: { vacancies: filterVac },
  };
};

export default getByNameCompanyService;
