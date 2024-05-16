import { Router } from 'express';
import { AuthController } from './Domains/Auth';
import { usersRoutes } from './Domains/Users';

const router = Router()

const authController = new AuthController()

router.post("/auth", authController.handle)

router.use("/users", usersRoutes)

export default router

