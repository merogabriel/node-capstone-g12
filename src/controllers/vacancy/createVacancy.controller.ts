import { Request, Response } from "express";
import { createVacancyService } from "../../services/vacancy";

const vacancyCreateController = async (
  request: Request,
  response: Response
) => {
  try {
    const body = request.body;
    const returnCreate = await createVacancyService(body);

    return response.status(201).send(returnCreate);
  } catch (err) {
    console.log(err);
    response.status(400).json({ error: "error" });
  }
};

export default vacancyCreateController;
