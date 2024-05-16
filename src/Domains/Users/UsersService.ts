import { UserRepository } from './UsersRepository';
import { IUser } from './types';

export class UsersService {
  async create({ email, name, surname, birthday }: IUser): Promise<IUser> {
    const userRepository = new UserRepository()

    const user = { email, name, surname, birthday }
    const createdUser = await userRepository.createUser(user)

    return createdUser
  }
}
