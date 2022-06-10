import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company } from "../../entities/company.entity";

const getByNameCompanyService = async (name: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      name: name,
    },
  });

  if (!company) {
    throw new ErrorHandler(404, "company not found");
  }

  return company;
};

export default getByNameCompanyService;
