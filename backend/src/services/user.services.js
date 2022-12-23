import UserModel from '#models/user.models.js'

class UserService {
  static #toPersistence(domainUser) {
    const { id, firstname, lastname, username, email, password } = domainUser

    return {
      _id: id,
      firstname,
      lastname,
      username,
      email,
      password
    }
  }

  static #toDomain(persistenceUser) {
    const { _id, firstname, lastname, username, email, password } =
      persistenceUser

    return {
      id: _id,
      firstname,
      lastname,
      username,
      email,
      password
    }
  }

  static async create(domainUser) {
    const persistenceUser = UserService.#toPersistence(domainUser)
    const newUser = new UserModel(persistenceUser)

    await newUser.save()

    return UserService.#toDomain(newUser)
  }

  static async findById(id) {
    const userFound = await UserModel.findById(id).exec()

    if (!userFound) return null

    return UserService.#toDomain(userFound)
  }

  static async findBy(filter) {
    const userFound = await UserModel.findOne(filter).exec()

    if (!userFound) return null

    return UserService.#toDomain(userFound)
  }

  static async update(domainUser) {
    const { _id, ...rest } = UserService.toPersistence(domainUser)

    await UserModel.findByIdAndUpdate(_id, rest)
  }

  static async deleteById(id) {
    if (!id) return null

    await UserModel.findByIdAndDelete(id)
  }
}

export default UserService
