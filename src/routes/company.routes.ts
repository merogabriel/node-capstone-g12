import { Router } from "express";
import createCompanyController from "../controllers/company/createCompany.controller";
import loginCompanyController from "../controllers/company/loginCompany.controller";
import getByNameCompanyController from "../controllers/company/getByNameCompany.controller";
import deleteCompanyController from "../controllers/company/deleteCompany.controller";

const routes = Router();

export const companyRoutes = () => {
  routes.post("/register", createCompanyController);
  routes.post("/login", loginCompanyController);
  routes.post("/:name", getByNameCompanyController);
  routes.delete("/delete", deleteCompanyController);

  return routes;
};
