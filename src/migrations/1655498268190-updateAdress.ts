import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAdress1655498268190 implements MigrationInterface {
  name = "updateAdress1655498268190";

  public async up(queryRunner: QueryRunner): Promise<void> {
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
    await queryRunner.query(`DELETE FROM "address" ;`);
  }
}
