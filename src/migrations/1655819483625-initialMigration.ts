import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1655819483625 implements MigrationInterface {
    name = 'initialMigration1655819483625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "REL_effa21fd939d9507eda71e2ba7"`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP COLUMN "vacancyVacancyUuid"`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD "cadidateCandidatesUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "UQ_990220e29a24e3b4f610c3a3e95" UNIQUE ("cadidateCandidatesUuid")`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "FK_990220e29a24e3b4f610c3a3e95" FOREIGN KEY ("cadidateCandidatesUuid") REFERENCES "candidates"("candidatesUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "FK_990220e29a24e3b4f610c3a3e95"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "UQ_990220e29a24e3b4f610c3a3e95"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP COLUMN "cadidateCandidatesUuid"`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD "vacancyVacancyUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "REL_effa21fd939d9507eda71e2ba7" UNIQUE ("vacancyVacancyUuid")`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
