import { Request, Response } from "express";
import getByNameCompanyService from "../../services/company/getByNameCompany.service";
import { errorHandler } from "../../errors";

const getByNameCompanyController = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const company = await getByNameCompanyService(name);

    return res.status(200).json( company.vacancies );
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default getByNameCompanyController;
