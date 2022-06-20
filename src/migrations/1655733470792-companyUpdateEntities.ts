import { MigrationInterface, QueryRunner } from "typeorm";

export class companyUpdateEntities1655733470792 implements MigrationInterface {
    name = 'companyUpdateEntities1655733470792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "FK_da52b8a0ae74e9a33a6808bda8f"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP COLUMN "addressAddressUuid"`);
        await queryRunner.query(`ALTER TABLE "company" ADD "addressAddressUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`);
        await queryRunner.query(`ALTER TABLE "candidates" ALTER COLUMN "vacancyVacancyUuid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company" ADD CONSTRAINT "FK_aaabb1e9fed30eb238999c70c60" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company" DROP CONSTRAINT "FK_aaabb1e9fed30eb238999c70c60"`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`);
        await queryRunner.query(`ALTER TABLE "candidates" ALTER COLUMN "vacancyVacancyUuid" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company" DROP COLUMN "addressAddressUuid"`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD "addressAddressUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "FK_da52b8a0ae74e9a33a6808bda8f" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
