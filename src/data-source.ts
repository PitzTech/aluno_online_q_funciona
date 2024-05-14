import "reflect-metadata"
import "dotenv/config"

import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: ['db/entity/*.ts'],
  migrations: ['db/migration/*.ts'],
  ssl: {
    rejectUnauthorized: false
  }
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during data source initialization", err)
  })
