import { Request, Response } from "express"
import { UserRepository } from './UsersRepository'

export class UserController {
  async handle(req: Request, res: Response) {

    const userRepository = new UserRepository()
    const user = await userRepository.createUser()

    const response = {
      body: user
    }

    res.send(response)
  }
}
