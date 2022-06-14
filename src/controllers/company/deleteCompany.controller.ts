import { Request, Response } from "express";
import deleteCompanyService from "../../services/company/deleteCompany.service";
import { errorHandler } from "../../errors";

const deleteCompanyController = async (req: Request, res: Response) => {
  try {
    const { cnpj } = req.body;

    const deletedCompany = await deleteCompanyService(cnpj);

    return res.status(deletedCompany.status).json(deletedCompany.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default deleteCompanyController;
