import { Request, Response } from "express";
import getCandidatesService from "../../services/candidates/getCandidates.service";
import { errorHandler } from "../../errors";

const getCandidatesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cnpj } = req.body;

    const candidates = await getCandidatesService(id, cnpj);

    return res.status(candidates.status).send(candidates.message);
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default getCandidatesController;
