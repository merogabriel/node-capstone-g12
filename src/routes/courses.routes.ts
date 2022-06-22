import { Router } from "express";
import getCoursesController from "../controllers/courses/getCourses.controller";

const routes = Router();

export const coursesRoutes = () => {
  routes.get("/", getCoursesController);

  return routes;
};
