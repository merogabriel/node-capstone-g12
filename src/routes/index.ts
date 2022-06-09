import { Express } from "express";
import { companyRoutes } from "./company.routes";
import helloRouter from "./hello.routes";

const registerRouters = (app: Express): void => {
  app.use("/hello", helloRouter);
  app.use("company", companyRoutes);
};

export default registerRouters;
