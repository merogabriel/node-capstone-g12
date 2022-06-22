import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Candidate, Vacancy } from "../../entities";
import { User } from "../../entities";

const applyUserService = async (request: Request) => {
  const vacancyRepository = AppDataSource.getRepository(Vacancy);
  const userRepository = AppDataSource.getRepository(User);
  const candidatesRepository = AppDataSource.getRepository(Candidate);

  const reference = request.params.vacancyId;
  const vacancy = await vacancyRepository.findOne({
    where: { vacancyUuid: reference },
  });

  const user = await userRepository.findOne({
    where: { email: request.body.user },
  });

  const listCandidates = await candidatesRepository.findOne({
    where: { candidatesUuid: vacancy.cadidate.candidatesUuid },
  });

  try {
    listCandidates.user.push(user);
  } catch (err) {
    console.log(err);
  }

  await candidatesRepository.save(listCandidates);

  return "";
};

export default applyUserService;
