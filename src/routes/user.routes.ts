import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import loginUserController from "../controllers/user/loginUser.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("/register", createUserController);
  routes.post("/login", loginUserController);
  routes.delete("/delete", deleteUserController);

  return routes;
};
