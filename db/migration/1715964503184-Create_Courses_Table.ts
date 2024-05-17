import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { entityName, usersCoursesJoinTableName } from '../entity/Course';
import { entityName as entityJoinedName } from '../entity/User';

const tableName = entityName
const joinTableName = usersCoursesJoinTableName
const joinedTable = entityJoinedName

export class CreateCoursesTable1715964503184 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: "id",
            type: "serial",
            isPrimary: true
          },
          {
            name: "name",
            type: "string",
            length: "30",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
        ]
      })
    )

    await queryRunner.createForeignKey(
      tableName, // courses
      new TableForeignKey({
        columnNames: ["user_id", "course_id"],
        referencedColumnNames: ["id"],
        referencedTableName: joinedTable, // users,
        onDelete: "CASCADE"
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName)
  }

}
