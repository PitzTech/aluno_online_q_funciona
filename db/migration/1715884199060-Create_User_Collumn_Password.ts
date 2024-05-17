import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
import { entityName } from '../entity/User';

const tableName = entityName

export class CreateUserCollumnPassword1715884199060 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(tableName, new TableColumn({
      name: 'password',
      type: "varchar(100)",
      isNullable: true
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(tableName, 'password')
  }

}
