import { AppDataSource } from "../../data-source";
import { Candidate, Company, Vacancy } from "../../entities";

const getCandidatesService = async (id: string, cnpj: string) => {
  const companyRepository = AppDataSource.getRepository(Company);
  const vacancyRepository = AppDataSource.getRepository(Vacancy);

  const company = await companyRepository.findOne({
    where: {
      cnpj: cnpj,
    },
  });
  const vacancy = await vacancyRepository.findOne({
    where: {
      vacancyUuid: id,
    },
  });

  if (!vacancy) {
    return {
      status: 404,
      message: { message: "Vacancy not found" },
    };
  }

  if (!company.vacancies.find((vaga) => vaga.vacancyUuid === id)) {
    return {
      status: 409,
      message: { message: "vacancy does not belong to your company" },
    };
  }

  // const CandidatesName = [];
  // vacancy.cadidate.user.forEach((element) => {
  //   CandidatesName.push(element.name);
  // });
  // return CandidatesName;

  return {
    status: 200,
    message: vacancy.cadidate.user,
  };
};

export default getCandidatesService;
