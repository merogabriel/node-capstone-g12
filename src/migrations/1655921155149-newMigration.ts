import { MigrationInterface, QueryRunner } from "typeorm";

export class newMigration1655921155149 implements MigrationInterface {
    name = 'newMigration1655921155149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" ADD "hiredId" uuid`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "UQ_b6cd5759166c5dfae1997456802" UNIQUE ("hiredId")`);
        await queryRunner.query(`ALTER TABLE "vacancies" ADD CONSTRAINT "FK_b6cd5759166c5dfae1997456802" FOREIGN KEY ("hiredId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "FK_b6cd5759166c5dfae1997456802"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP CONSTRAINT "UQ_b6cd5759166c5dfae1997456802"`);
        await queryRunner.query(`ALTER TABLE "vacancies" DROP COLUMN "hiredId"`);
    }

}
