import { Request, Response } from "express";
import { errorHandler } from "../../errors";
import getCoursesService from "../../services/courses/getCourses.service";

const getCoursesController = async (req: Request, res: Response) => {
  try {
    const courses = await getCoursesService();
    console.log(courses);
    return res.status(200).send({ courses });
  } catch (err) {
    if (err instanceof Error) {
      errorHandler(err, res);
    }
  }
};

export default getCoursesController;
