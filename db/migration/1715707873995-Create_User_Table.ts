const { entityName } = require('../entity/User')

const { QueryRunner, Table } = require("typeorm")

module.exports = class CreateUserTable1715707873995 {

  async up(queryRunner) {
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

  async down(queryRunner) {
    await queryRunner.dropTable(entityName)
  }

}
