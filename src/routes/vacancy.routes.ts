import { Router } from "express";
import {
  vacancyCreateController,
  vacancyListController,
  proprietyVacancyController,
  hiredVacancyController,
  deleteVacancyController,
} from "../controllers/vacancy";
import { verifyToken } from '../middlewares'

const routes = Router();

export const vacancyRouter = () => {
  routes.post("/create", verifyToken, vacancyCreateController);
  routes.get("/list", vacancyListController);
  routes.patch(
    "/propriety/:vacancyId",
    verifyToken,
    proprietyVacancyController
  );
  routes.patch("/hired/:vacancyId", verifyToken, hiredVacancyController);
  routes.delete("/delete/:vacancyId", verifyToken, deleteVacancyController);

  return routes;
};
