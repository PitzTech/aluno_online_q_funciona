import { Request, Response } from "express"

class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authService = new AuthService()
    const user = authService.login({ email, password })

    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    return {
      body: "Usuário Autenticado com sucesso"
    }
  }
}
