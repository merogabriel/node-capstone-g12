import { Router } from "express";
import { vacancyCreateController } from "../controllers/vacancy";

const routes = Router();

export const vacancyRouter = () => {
  routes.post("/create", vacancyCreateController);

  return routes;
};
