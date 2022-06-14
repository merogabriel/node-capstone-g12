import { Router } from "express";
import { vacancyCreateController } from "../controllers/vacancy";

const vacancyRouter = Router();

vacancyRouter.post("/create",vacancyCreateController);

export default vacancyRouter;
