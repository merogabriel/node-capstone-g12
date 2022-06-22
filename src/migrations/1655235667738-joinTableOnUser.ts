import { MigrationInterface, QueryRunner } from "typeorm";

export class joinTableOnUser1655235667738 implements MigrationInterface {
  name = "joinTableOnUser1655235667738";

  public async up(queryRunner: QueryRunner): Promise<void> {
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
      `ALTER TABLE "user_courses_courses" ADD CONSTRAINT "FK_e01f6486bfed8aceb2c061fd341" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" ADD CONSTRAINT "FK_58840e64c58ead461a9b0b045a2" FOREIGN KEY ("coursesEmployeeUuid") REFERENCES "courses"("employeeUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" DROP CONSTRAINT "FK_58840e64c58ead461a9b0b045a2"`
    );
    await queryRunner.query(
      `ALTER TABLE "user_courses_courses" DROP CONSTRAINT "FK_e01f6486bfed8aceb2c061fd341"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_58840e64c58ead461a9b0b045a"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e01f6486bfed8aceb2c061fd34"`
    );
    await queryRunner.query(`DROP TABLE "user_courses_courses"`);
  }
}
