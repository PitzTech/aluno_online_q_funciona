import { Router } from 'express';
import { AuthController } from './Domains/Auth';
import { UserController } from './Domains/Users';

const router = Router()

const authController = new AuthController()
const userController = new UserController()

router.post("/auth", authController.handle)
router.post("/user/create", userController.handle)

export default router

