import { AppDataSource } from "../../data-source";
import { Courses } from "../../entities";

const getCoursesService = async () => {
  const companyRepository = AppDataSource.getRepository(Courses);
  const courses = await companyRepository.find();
  const coursesName = [];
  courses.forEach((element) => {
    coursesName.push(element.name);
  });
  return coursesName;
};

export default getCoursesService;
