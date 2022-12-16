/**
 * This module defines a function as a handler for the
 * 'login' endpoint.
 */

import { compare } from 'bcrypt'
import { signJWT } from '#utils/jwt.utils.js'
import UserService from '#services/user.services.js'

const userService = new UserService()

const userLoginController = async (req, res) => {
  const { username, password } = req.body

  // Verify the existence of the user in the database
  const existingUser = await userService.findBy({ username })
  if (!existingUser)
    return res.status(401).json({ error: ['Unauthorizd user'] })

  // Validate if the associated password is correct
  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword)
    return res.status(401).json({ error: ['Wrong credentials'] })

  // Generate a JWT for the user who logs in to the application
  const payload = { id: existingUser.id }
  const jwt = signJWT({ payload })

  return res.json({
    id: existingUser.id,
    name: existingUser.name,
    surname: existingUser.surname,
    username: existingUser.username,
    email: existingUser.email,
    jwt
  })
}

export default userLoginController
