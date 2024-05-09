import { Request, Response } from "express"
import { AuthService } from './AuthService'

export class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authService = new AuthService()
    const isUserAuthenticated = authService.login({ email, password })

    if (!isUserAuthenticated) {
      throw new Error("Usuário não encontrado")
    }

    const response = {
      body: "Usuário Autenticado com sucesso"
    }

    res.send(response)
  }
}
