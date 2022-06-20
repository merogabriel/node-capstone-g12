import { Request, Response } from "express";
import updateCompanyService from "../../services/company/updateCompany.service";

const updateCompanyController = async (req: Request, res: Response) => {
  try {
    const updated = await updateCompanyService(req);

    return res.status(updated.status).send(updated.message);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "error to catch company" });
  }
};

export default updateCompanyController;
