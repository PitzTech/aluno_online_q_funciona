import { IUser } from './types'

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
}
