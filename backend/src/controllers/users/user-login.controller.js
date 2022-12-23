/**
 * This module defines a function as a handler for the
 * 'login' endpoint.
 */

import UserService from '#services/user.services.js'
import { signJWT } from '#utils/jwt.utils.js'
import { compare } from 'bcrypt'

const userLoginController = async (req, res) => {
  const { username, password } = req.body

  // Verify the existence of the user in the database
  const existingUser = await UserService.findBy({ username })
  if (!existingUser) { return res.status(401).json({ errors: ['Unauthorizd user'] }) }

  // Validate if the associated password is correct
  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword) { return res.status(401).json({ errors: ['Wrong credentials'] }) }

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
