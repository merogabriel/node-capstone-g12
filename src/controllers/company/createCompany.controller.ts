import { Request, Response } from "express";
import createCompanyService from "../../services/company/createCompany.service";
import { errorHandler } from "../../errors";

const createCompanyController = async (req: Request, res: Response) => {
  try {
    const { name, cnpj, password } = req.body;
    const newCompany = await createCompanyService({
      name,
      cnpj,
      password,
    });
    return res.status(newCompany.status).send(newCompany.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default createCompanyController;
