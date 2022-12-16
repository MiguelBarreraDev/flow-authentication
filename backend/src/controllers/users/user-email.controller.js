import UserService from "#services/user.services.js"
import { compare } from "bcrypt"

const userService = new UserService()

const userEmailController = async (req, res) => {
  const { id, body: { email, password } } = req

  if (!id)
    return res.status(401).json({ error: ['Unauthorized user'] })

  if (!email || !password)
    return res
      .status(400)
      .json({ error: ['The field or fields to update are not valid'] })
  
  const existingUser = await userService.findById(id)
  if (!existingUser) return res.status(401).json({ error: ['Unauthorized user'] })

  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword) return res.status(401).json({ error: ['Wrong credentials'] })

  await userService.update({ id, email })

  res.json({ message: 'Email updated successfully' })
}

export default userEmailController
