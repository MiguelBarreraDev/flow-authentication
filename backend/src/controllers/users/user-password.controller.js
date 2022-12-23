import UserService from '#services/user.services.js'
import { compare, hash } from 'bcrypt'

const userService = new UserService()

const userPasswordController = async (req, res) => {
  const { id, body: { oldPassword, newPassword } } = req

  if (!id) { return res.status(400).json({ error: 'User id not found' }) }

  if (!newPassword || !oldPassword) {
    return res
      .status(400)
      .json({ errors: 'The field or fields to update are not valid' })
  }

  const existingUser = await userService.findById(id)
  if (!existingUser) return res.status(401).json({ errors: ['Wrong credentials'] })

  const checkPassword = await compare(oldPassword, existingUser.password)
  if (!checkPassword) return res.status(401).json({ errors: ['Wrong credentials'] })

  const hashedPassword = await hash(newPassword, 10)
  await userService.update({ id, password: hashedPassword })

  res.json({ message: 'Password updated successfully' })
}

export default userPasswordController
