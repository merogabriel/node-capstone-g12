import { Request, Response } from "express";
import { updateVacancyProprietsService } from "../../services/vacancy";

const proprietyVacancyController = async (
  request: Request,
  response: Response
) => {
  try {
    const vacancy = await updateVacancyProprietsService(request);

    return response.status(200).send(vacancy);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: "error" });
  }
};

export default proprietyVacancyController;
