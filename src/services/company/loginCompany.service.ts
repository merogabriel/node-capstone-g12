import { ILoginCompany } from "../../interfaces/company";
import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Company } from "../../entities";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginCompanyService = async ({ cnpj, password }: ILoginCompany) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const company = await companyRepository.findOne({
    where: {
      cnpj: cnpj,
    },
  });

  const error = [];

  if (!cnpj) {
    error.push("cnpj is a required field");
  }
  if (!password) {
    error.push("password is a required field");
  }
  if (error.length > 0) {
    return {
      status: 400,
      message: { message: error },
    };
  }
  if (!company) {
    return {
      status: 404,
      message: { message: `Company not found.` },
    };
  }

  if (!bcrypt.compareSync(password, company.password)) {
    return {
      status: 401,
      message: { message: "Wrong cnpj/password" },
    };
  }

  const token = jwt.sign({ cnpj: cnpj }, String(process.env.SECRET_KEY), {
    expiresIn: process.env.EXPIRES_IN,
  });
  return {
    status: 200,
    message: { token: token },
  };
};

export default loginCompanyService;
