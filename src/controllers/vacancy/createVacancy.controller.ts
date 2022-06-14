import { Request, Response } from "express";
// import { createVacancyService } from "../../services/vacancy";

const vacancyCreateController = (request: Request, response: Response) => {
  console.log("entrei no controller");
  return response.status(200).json({ message: "ok!" });
  // try {
  //   const body = request.body;
  //   const { newCadidates, newVacancy } = await createVacancyService(body);

  //   return response
  //     .status(201)
  //     .json({ cadidatos: newCadidates, vaga: newVacancy });
  // } catch (err) {
  //   console.log(err);
  //   response.status(400).json({ error: "error" });
  // }
};

export default vacancyCreateController;
