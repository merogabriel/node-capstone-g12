import { Router } from "express";
import createCompanyController from "../controllers/company/createCompany.controller";
import loginCompanyController from "../controllers/company/loginCompany.controller";
import getByNameCompanyController from "../controllers/company/getByNameCompany.controller";
import deleteCompanyController from "../controllers/company/deleteCompany.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const routes = Router();

export const companyRoutes = () => {
  routes.post("/register", createCompanyController);
  routes.post("/login", loginCompanyController);
  routes.get("/:name", getByNameCompanyController);
  routes.delete("/delete", verifyToken, deleteCompanyController);

  return routes;
};
