import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company } from "../../entities";

const deleteCompanyService = async (cnpj: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      cnpj: cnpj,
    },
  });

  if (!company) {
    return {
      status: 404,
      message: { message: `Company not found.` },
    };
  }

  await companyRepository.delete(company.id);
  return {
    status: 204,
    message: {},
  };
};

export default deleteCompanyService;
