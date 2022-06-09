import { Request, Response } from "express";
import { createVacancyService } from "../../services/vacancy";

const vacancyCreateController = async (
  request: Request,
  response: Response
) => {
  try {
    const { vacancy } = request.body;
    const newvacancy = await createVacancyService(vacancy);

    return response.status(201).json(newvacancy);
  } catch (err) {
    response.status(400).json({ error: "error" });
  }
};

export default vacancyCreateController;
