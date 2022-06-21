import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Candidate, Vacancy } from "../../entities";

const vacancyHiredService = async (request: Request) => {
  try {
    const vacancyRepository = AppDataSource.getRepository(Vacancy);
    const body = request.body;
    const reference = request.params.vacancyId;

    const updateVacancy = await vacancyRepository.findOne({
      where: { vacancyUuid: reference },
    });

    // const cadidates = updateVacancy.cadidate;
    // console.log(cadidates);

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
    console.log("\nnao deu certo\n");

    return { error: "error no service" };
  }
};

export default vacancyHiredService;
