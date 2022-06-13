import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1654878300524 implements MigrationInterface {
    name = 'initialMigration1654878300524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employees" ("employeeUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "addressAddressUuid" uuid, CONSTRAINT "PK_c6f7a5ae36460dd225f3fb35546" PRIMARY KEY ("employeeUuid"))`);
        await queryRunner.query(`CREATE TABLE "candidates" ("candidatesUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "vacancyVacancyUuid" uuid NOT NULL, CONSTRAINT "REL_effa21fd939d9507eda71e2ba7" UNIQUE ("vacancyVacancyUuid"), CONSTRAINT "PK_ced113c399eec6883c8add66b7a" PRIMARY KEY ("candidatesUuid"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL, "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacancies" ("vacancyUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "companyId" uuid, "addressAddressUuid" uuid, CONSTRAINT "PK_2bc242db1f991555a0a4a564176" PRIMARY KEY ("vacancyUuid"))`);
        await queryRunner.query(`CREATE TABLE "address" ("addressUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "state" character varying NOT NULL, CONSTRAINT "PK_9c7d79609a7e95123553a1a2b2a" PRIMARY KEY ("addressUuid"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "age" integer NOT NULL, "hired" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_efc9ddca36dfb64e8dcd5276823" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "FK_da52b8a0ae74e9a33a6808bda8f" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "FK_da52b8a0ae74e9a33a6808bda8f"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a"`);
        await queryRunner.query(`ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_efc9ddca36dfb64e8dcd5276823"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "vacancies"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "candidates"`);
        await queryRunner.query(`DROP TABLE "employees"`);
    }

}
