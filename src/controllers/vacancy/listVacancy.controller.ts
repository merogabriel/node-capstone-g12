import { Request, Response } from "express";
import listVacancies from "../../services/vacancy/vacancyList.service";

const vacancyListController = async (request: Request, response: Response) => {
  try {
    const allVacancies = await listVacancies();
    response.status(200).send(allVacancies);
  } catch (err) {
    console.log(err);
    return response.status(418).json({ error: "I`m a tea pot" });
  }
};

export default vacancyListController;
