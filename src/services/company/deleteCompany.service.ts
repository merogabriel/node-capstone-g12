import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company } from "../../entities/company.entity";

const deleteCompanyService = async (cnpj: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      cnpj: cnpj,
    },
  });

  if (!company) {
    throw new ErrorHandler(404, "company not found");
  }

  await companyRepository.delete(company.id);
  return {};
};

export default deleteCompanyService;
