import { Request, Response } from "express"
import { UsersService } from './UsersService'

export class UserController {
  async create(req: Request, res: Response) {
    const { email, name, surname } = req.body

    const birthday = new Date()

    const usersService = new UsersService()
    const user = await usersService.create({ email, name, surname, birthday })

    const response = {
      body: user
    }

    res.send(response)
  }
}
