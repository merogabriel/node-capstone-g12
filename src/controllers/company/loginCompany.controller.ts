import { Request, Response } from "express";
import loginCompanyService from "../../services/company/loginCompany.service";
import { errorHandler } from "../../errors";

const loginCompanyController = async (req: Request, res: Response) => {
  try {
    const { cnpj, password } = req.body;

    const token = await loginCompanyService({ cnpj, password });

    return res.status(token.status).send(token.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default loginCompanyController;
