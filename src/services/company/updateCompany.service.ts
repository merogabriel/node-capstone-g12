import { AppDataSource } from "../../data-source";
import { Request } from "express";
import { Company } from "../../entities";
import { hash, hashSync } from "bcrypt";

const updateCompanyService = async (request: Request) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const { companyId } = request.params;

  const updateCompany: Company = await companyRepository.findOne({
    where: { id: companyId },
  });

  if (!updateCompany) {
    return { status: 404, message: { error: "company not found" } };
  }

  const oldPassword = request.body.password;
  const newPassword = await hash(oldPassword, 10);

  await companyRepository.update(companyId, {
    password: newPassword,
  });

  const updated = await companyRepository.findOne({
    where: { id: companyId },
  });

  return { status: 200, message: updated };
};

export default updateCompanyService;
