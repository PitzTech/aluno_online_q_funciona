import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export const entityName = 'users'

@Entity(entityName)
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column("varchar", { length: 60 })
  surname: string

  @Column("varchar", { length: 30 })
  email: string

  @Column()
  birthday: Date

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @Column("varchar", { length: 12 })
  subscription: string
}
