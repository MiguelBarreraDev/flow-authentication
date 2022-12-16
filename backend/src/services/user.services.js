import UserModel from "#models/user.models.js"

class UserService {
  #toPersistence (domainUser) {
    const { id, name, surname, username, email, password } = domainUser

    return {
      _id: id,
      name,
      surname,
      username,
      email,
      password
    }
  }

  #toDomain (persistenceUser) {
    const { _id, name, surname, username, email, password } = persistenceUser

    return {
      id: _id,
      name,
      surname,
      username,
      email,
      password
    }
  }

  async create (domainUser) {
    const persistenceUser = this.#toPersistence(domainUser)
    const newUser = new UserModel(persistenceUser)

    await newUser.save()
    
    return this.#toDomain(newUser)
  }

  async findById (id) {
    const userFound = await UserModel.findById(id).exec()

    if (!userFound) return null

    return this.#toDomain(userFound)
  }

  async findBy (filter) {
    const userFound = await UserModel.findOne(filter).exec()

    if (!userFound) return null

    return this.#toDomain(userFound)
  }

  async update (domainUser) {
    const { _id, ...rest } = this.#toPersistence(domainUser)

    await UserModel.findByIdAndUpdate(_id, rest)
  }

  async deleteById (id) {
    if (!id) return null

    await UserModel.findByIdAndDelete(id)
  }
}

export default UserService
