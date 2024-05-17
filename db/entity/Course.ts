import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

export const entityName = 'courses'
export const usersCoursesJoinTableName = 'usersCourses'

@Entity(entityName)
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  // Relationships

  @ManyToMany(() => User, (user) => user.courses)
  @JoinTable({ name: usersCoursesJoinTableName })
  users: User[]
}
