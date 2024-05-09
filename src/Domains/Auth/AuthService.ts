

interface IFindOne {
  email: string
}

interface IUser {
  name: string
  email: string
  password: string
  birthday?: Date
}


class AuthService {
  async login({ email, password }) {
    const userRepository = new UserRepository()
    const users = userRepository.getUsers()

    const user = users.find(user => {
      if (user.email == email && user.password == password) {
        return true
      }
    })

    
  }
}
