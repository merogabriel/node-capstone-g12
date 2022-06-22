import { Request, Response } from "express";
import { deleteVacancyService } from "../../services/vacancy";

const deleteVacancyController = async (
  request: Request,
  response: Response
) => {
  try {
    const answer = await deleteVacancyService(request.params.vacancyId);

    if (answer === true) {
      return response.status(204).json();
    }

    return response.status(400).json({ error: "essa vaga não existe" });
  } catch (error) {
    console.log(error);

    return response
      .status(400)
      .json({ error: "não conseguiu deletar uma vaga" });
  }
};

export default deleteVacancyController;
