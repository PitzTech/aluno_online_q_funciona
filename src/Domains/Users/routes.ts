import { Router } from 'express';
import { UserController } from './UserController';

const userController = new UserController()

const usersRoutes = Router()

usersRoutes.post("/create", userController.create)

export {
  usersRoutes
}
