import { Request, Response } from "express";
import { vacancyHiredService } from "../../services/vacancy";

const hiredVacancyController = async (request: Request, response: Response) => {
  try {
    const vacancy = await vacancyHiredService(request);

    return response.status(200).send(vacancy);
  } catch (error) {
    console.error();
    return response.status(400).json({ message: "error" });
  }
};

export default hiredVacancyController;
