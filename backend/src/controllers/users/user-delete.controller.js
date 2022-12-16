
import UserService from "#services/user.services.js"
import { compare } from "bcrypt"

const userService = new UserService()

const userDeleteController = async (req, res) => {
  const { id, body: { password } } = req

  if (!id)
    return res.status(401).json({ error: ['Unauthorized user'] })
  
  if (!password)
    return res
      .status(400)
      .json({ error: 'The field or fields to update are not valid' })

  const existingUser = await userService.findById(id)
  if (!existingUser) return res.status(401).json({ error: ['Unauthorized user'] })

  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword) return res.status(400).json({ error: ['Wrong credentials'] })

  await userService.deleteById(id)

  res.send({ message: 'User deleted successfully' })
}

export default userDeleteController
