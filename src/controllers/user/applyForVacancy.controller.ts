import { Request, Response } from "express";
import applyUserService from "../../services/user/applyUser.service";

const applyForvacancyController = async (
  request: Request,
  response: Response
) => {
  try {
    const returnApply = await applyUserService(request);

    return response.status(200).send(returnApply);
  } catch (error) {
    console.log(error);
    console.log("eeror no controller de aplicação de vaga");

    return response
      .status(400)
      .json({ error: "não conseguiu se candidatar para a vaga" });
  }
};

export default applyForvacancyController;
