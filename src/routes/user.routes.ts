import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import loginUserController from "../controllers/user/loginUser.controller";
import updateUserController from "../controllers/user/patchUser.controller";
import applyForvacancyController from "../controllers/user/applyForVacancy.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/register", createUserController);
  routes.post("/login", loginUserController);
  routes.patch("/update", verifyToken, updateUserController);
  routes.delete("/delete", verifyToken, deleteUserController);
  routes.post("/apply/:vacancyId", verifyToken, applyForvacancyController);

  return routes;
};
