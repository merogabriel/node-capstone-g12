import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAdress1655472015552 implements MigrationInterface {
  name = "updateAdress1655472015552";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "courses" ("employeeUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b34cd67ca3e98874141c9f814f4" PRIMARY KEY ("employeeUuid"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_courses_courses" ("userId" uuid NOT NULL, "coursesEmployeeUuid" uuid NOT NULL, CONSTRAINT "PK_9fe646f8ff2b502a8bab4031dfe" PRIMARY KEY ("userId", "coursesEmployeeUuid"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e01f6486bfed8aceb2c061fd34" ON "user_courses_courses" ("userId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_58840e64c58ead461a9b0b045a" ON "user_courses_courses" ("coursesEmployeeUuid") `
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD "cadidateCandidatesUuid" uuid`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "UQ_990220e29a24e3b4f610c3a3e95" UNIQUE ("cadidateCandidatesUuid")`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "candidatesCandidatesUuid" uuid`
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "addressAddressUuid" uuid`);
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a"`
    );
    await queryRunner.query(
      `ALTER TABLE "company" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ALTER COLUMN "vacancyVacancyUuid" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "FK_990220e29a24e3b4f610c3a3e95" FOREIGN KEY ("cadidateCandidatesUuid") REFERENCES "candidates"("candidatesUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_bad9c7dd2f13238d8abc8f37ba7" FOREIGN KEY ("candidatesCandidatesUuid") REFERENCES "candidates"("candidatesUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_a3cf79ca19063fbd3abe697b72f" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" ADD CONSTRAINT "FK_e01f6486bfed8aceb2c061fd341" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" ADD CONSTRAINT "FK_58840e64c58ead461a9b0b045a2" FOREIGN KEY ("coursesEmployeeUuid") REFERENCES "courses"("employeeUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );

    await queryRunner.query(`INSERT INTO "address" (state) VALUES ('CE'),
        ('RR'),
        ('AP'),
        ('AM'),
        ('PA'),
        ('AC'),
        ('RO'),
        ('TO'),
        ('MA'),
        ('PI'),
        ('RN'),
        ('PB'),
        ('PE'),
        ('AL'),
        ('SE'),
        ('BA'),
        ('MT'),
        ('DF'),
        ('GO'),
        ('MS'),
        ('MG'),
        ('ES'),
        ('RJ'),
        ('SP'),
        ('PR'),
        ('SC'),
        ('RS');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" DROP CONSTRAINT "FK_58840e64c58ead461a9b0b045a2"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" DROP CONSTRAINT "FK_e01f6486bfed8aceb2c061fd341"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" DROP CONSTRAINT "FK_effa21fd939d9507eda71e2ba78"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_a3cf79ca19063fbd3abe697b72f"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_bad9c7dd2f13238d8abc8f37ba7"`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "FK_990220e29a24e3b4f610c3a3e95"`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a"`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ALTER COLUMN "vacancyVacancyUuid" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "candidates" ADD CONSTRAINT "FK_effa21fd939d9507eda71e2ba78" FOREIGN KEY ("vacancyVacancyUuid") REFERENCES "vacancies"("vacancyUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "company" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "addressAddressUuid"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "candidatesCandidatesUuid"`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "UQ_990220e29a24e3b4f610c3a3e95"`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP COLUMN "cadidateCandidatesUuid"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_58840e64c58ead461a9b0b045a"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e01f6486bfed8aceb2c061fd34"`
    );
    await queryRunner.query(`DROP TABLE "user_courses_courses"`);
    await queryRunner.query(`DROP TABLE "courses"`);
  }
}
