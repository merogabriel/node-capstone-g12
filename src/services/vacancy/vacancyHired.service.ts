import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Vacancy } from "../../entities";

const vacancyHiredService = async (request: Request) => {
  try {
    const vacancyRepository = AppDataSource.getRepository(Vacancy);
    const body = request.body;
    const reference = request.params.vacancyId;

    const updateVacancy = await vacancyRepository.findOne({
      where: { vacancyUuid: reference },
    });

    const candidates = updateVacancy.cadidate.user;

    const toHired = candidates.find((user) => user.email === body.email);
    
    if (!toHired) {
      return { error: "candidato não encontrado!" };
    }

    updateVacancy.hired = toHired;
    updateVacancy.isActive = false;

    await vacancyRepository.save(updateVacancy);

    // const cadidatesRepository = AppDataSource.getRepository(Candidate);
    // const cadit = await cadidatesRepository.findOne({
    //   where: { candidatesUuid: reference },
    // });

    return updateVacancy;
    // entrar na vaga na propriedade de candidatos
    // dentro da tabela de candidatos acessar a lista de nomes
    // coletar o nome selecionado comparando com o do body
    // alterar na proprieade da vaga colocando o nome do candidato
  } catch (error) {
    console.log(error);

    return { error: "error no service" };
  }
};

export default vacancyHiredService;
