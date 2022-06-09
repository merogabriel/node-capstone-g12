import { Express } from "express";
import helloRouter from "./hello.routes";
import { userRoutes } from "./user.routes";

const registerRouters = (app: Express): void => {
  app.use("/hello", helloRouter);
  app.use("/users", userRoutes);
};

export default registerRouters;
