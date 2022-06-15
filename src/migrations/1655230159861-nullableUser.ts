import { MigrationInterface, QueryRunner } from "typeorm";

export class nullableUser1655230159861 implements MigrationInterface {
  name = "nullableUser1655230159861";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "courses" ("employeeUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b34cd67ca3e98874141c9f814f4" PRIMARY KEY ("employeeUuid"))`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "candidatesCandidatesUuid" uuid`
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "addressAddressUuid" uuid`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a"`
    );
    await queryRunner.query(
      `ALTER TABLE "company" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_bad9c7dd2f13238d8abc8f37ba7" FOREIGN KEY ("candidatesCandidatesUuid") REFERENCES "candidates"("candidatesUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_a3cf79ca19063fbd3abe697b72f" FOREIGN KEY ("addressAddressUuid") REFERENCES "address"("addressUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(`INSERT INTO "courses" ("name") VALUES
    ('ESCOLTA ARMADA'),
    ('TRANSPORTE DE VALORES'),
    ('SEGURANÇA DE GRANDES EVENTOS'),
    ('SEGURANÇA PESSOAL PRIVADA'),
    ('RECICLAGEM DE FORMAÇÃO DE VIGILANTES'),
    ('MANUTENÇÃO PREVENTIVA DE ARMAS DE FOGO'),
    ('Vigilância Patrimonial'),
    ('Extensão em Equipamentos  Não-letais'),
    ('Habilitação para Condução de Cão na Segurança Privada'),
    ('Nível Superior na Área da Segurança Privada'),
    ('Funcionamento e operação de equipamentos de  segurança eletrônica'),
    ('Técnicas de defesa pessoal'),
    ('Técnicas de primeiros socorros'),
    ('Uso de recursos de  informatica'),
    ('Criminalística'),
    ('Prevenção de combate a incêndio'),
    ('Vigilância'),
    ('Educação física')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vacancies" DROP CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_a3cf79ca19063fbd3abe697b72f"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_bad9c7dd2f13238d8abc8f37ba7"`
    );
    await queryRunner.query(
      `ALTER TABLE "company" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "vacancies" ADD CONSTRAINT "FK_2dd0d503a15a202a738deaeb22a" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "addressAddressUuid"`
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "candidatesCandidatesUuid"`
    );
    await queryRunner.query(`DROP TABLE "courses"`);
  }
}
