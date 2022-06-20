import { AppDataSource } from "../../data-source";
import { ErrorHandler } from "../../errors";
import { Address, Company } from "../../entities";
import bcrypt from "bcrypt";
import { ICompanyCreate } from "../../interfaces/company";

const createCompanyService = async ({
  name,
  cnpj,
  password,
  state,
}: ICompanyCreate) => {
  const CompanyRepository = AppDataSource.getRepository(Company);
  const addressRepostiroy = AppDataSource.getRepository(Address);
  const Companys = await CompanyRepository.find();
  const allAddress = await addressRepostiroy.find();

  const cnpjAlreadyExists = Companys.find((Company) => Company.cnpj === cnpj);
  const nameAlreadyExists = Companys.find((Company) => Company.name === name);
  const existsAdress = allAddress.find((address) => address.state === state);
  console.log(existsAdress);

  const error = [];

  if (!name) {
    error.push("name is a required field");
  }
  if (!cnpj) {
    error.push("cnpj is a required field");
  }
  if (!password) {
    error.push("password is a required field");
  }
  if (!state) {
    error.push("state is a required field");
  }

  if (error.length > 0) {
    return {
      status: 400,
      message: { message: error },
    };
  }
  if (cnpjAlreadyExists) {
    return {
      status: 409,
      message: { message: `Key (cnpj)=(${cnpj}) already exists.` },
    };
  }
  if (nameAlreadyExists) {
    return {
      status: 409,
      message: { message: `Key (name)=(${name}) already exists.` },
    };
  }
  if (!existsAdress) {
    return {
      status: 409,
      message: { message: `Key (state)=(${state}) dont exists.` },
    };
  }

  const company = new Company();
  company.name = name;
  company.cnpj = cnpj;
  company.password = bcrypt.hashSync(password, 10);
  company.address = existsAdress;

  CompanyRepository.create(company);
  await CompanyRepository.save(company);

  return {
    status: 201,
    message: company,
  };
};

export default createCompanyService;
