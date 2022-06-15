import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company } from "../../entities";

const getByNameCompanyService = async (name: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
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
  return {
    status: 200,
    message: { vacancies: company.vacancies },
  };
};

export default getByNameCompanyService;
