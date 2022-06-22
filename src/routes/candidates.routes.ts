import { Router } from "express";
import getCandidatesController from "../controllers/candidates/getCandidates.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const routes = Router();

export const candidateRoutes = () => {
  routes.get("/:id", verifyToken, getCandidatesController);

  return routes;
};
