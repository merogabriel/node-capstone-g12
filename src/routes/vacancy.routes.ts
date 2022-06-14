import { Router } from "express";
import {
  vacancyCreateController,
  vacancyListController,
} from "../controllers/vacancy";

const routes = Router();

export const vacancyRouter = () => {
  routes.post("/create", vacancyCreateController);
  routes.get("/list", vacancyListController);
  return routes;
};
