import { IUser } from './types'

import { AppDataSource } from '../../data-source'
import { User } from '../../entity'

export class UserRepository {
  async getUsers() {
    const db: IUser[] = [
      {
        name: "user 1",
        email: "teste",
        password: "123"
      },
      {
        name: "user 1",
        email: "teste2",
        password: "321"
      }
    ]

    return db
  }
  async createUser() {
    const userRepository = AppDataSource.getRepository(User)
    const birthday = (new Date()).toTimeString()
    const user = {
      name: "Teste",
      surname: "User 1",
      email: "teste@gmail.com",
      birthday: birthday
    }

    await userRepository.save(user)
    console.log("Usuário salvo")

    console.log("Showing all users")

    const savedUsers = await userRepository.find()
    console.log(savedUsers)
  }
}
