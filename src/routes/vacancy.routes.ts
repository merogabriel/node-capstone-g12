import { Router } from "express";
import {
  vacancyCreateController,
  vacancyListController,
  proprietyVacancyController,
  hiredVacancyController,
} from "../controllers/vacancy";
import verifyToken from "../middlewares/verifyToken.middleware";

const routes = Router();

export const vacancyRouter = () => {
  routes.post("/create", verifyToken, vacancyCreateController);
  routes.get("/list", vacancyListController);
  routes.patch("/propriety/:vacancyId", proprietyVacancyController);
  routes.patch("/hired/:vacancyId", hiredVacancyController);
  return routes;
};
