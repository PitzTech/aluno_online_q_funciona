import { Router } from 'express';
import { AuthController } from './Domains/Auth';

const router = Router()

const authController = new AuthController()

router.post("/auth", authController.handle)

export default router

