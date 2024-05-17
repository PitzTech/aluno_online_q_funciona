import { MigrationInterface, QueryRunner } from "typeorm";
import { entityName } from '../entity/User';

const tableName = entityName

export class CreateUserCollumnPassword1715884199060 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${tableName} ADD COLUMN password varchar(100);`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${tableName} DROP COLUMN password;`
    )
  }

}
