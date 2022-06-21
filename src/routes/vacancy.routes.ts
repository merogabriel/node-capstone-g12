import { Router } from "express";
import {
  vacancyCreateController,
  vacancyListController,
  proprietyVacancyController,
} from "../controllers/vacancy";

const routes = Router();

export const vacancyRouter = () => {
  routes.post("/create", vacancyCreateController);
  routes.get("/list", vacancyListController);
  routes.patch("/propriety/:vacancyId", proprietyVacancyController);
  routes.patch("/hired/:vacancyId");
  return routes;
};
