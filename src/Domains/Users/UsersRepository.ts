import { AppDataSource } from '../../../db/data-source'
import { User } from '../../../db/entity'
import { IUser } from './types'

export class UserRepository {
  async getUsers() {
    const db: IUser[] = [

    ]

    return db
  }
  async createUser({ name, surname, email, birthday }: IUser) {
    const userRepository = AppDataSource.getRepository(User)
    const user = {
      name,
      surname,
      email,
      birthday
    }

    const createdUser = await userRepository.save(user)

    return createdUser
  }
}
