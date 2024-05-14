import { MigrationInterface, QueryRunner, Table } from "typeorm";

const entityName = 'users'

export class CreateUserTable1715707873995 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: entityName,
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar(30)",
            isNullable: false
          },
          {
            name: "surname",
            type: "varchar(60)",
            isNullable: false
          },
          {
            name: "email",
            type: "varchar(60)",
            isNullable: false,
            isUnique: true
          },
          {
            name: "birthday",
            type: "timestamp",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: 'now()'
          }
          ,
          {
            name: "updated_at",
            type: "timestamp",
            default: 'now()'
          },
          {
            name: "subscription",
            type: "varchar(12)",
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(entityName)
  }

}
