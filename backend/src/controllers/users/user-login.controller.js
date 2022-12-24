/**
 * This module defines a function as a handler for the
 * 'login' endpoint.
 */

import UserService from '#services/user.services.js'
import { generateRefreshToken, generateToken } from '#utils/jwt.utils.js'
import { compare } from 'bcrypt'

const userLoginController = async (req, res) => {
  const { username, password } = req.body

  // Verify the existence of the user in the database
  const existingUser = await UserService.findBy({ username })
  if (!existingUser) {
    return res.status(401).json({ errors: ['Unauthorizd user'] })
  }

  // Validate if the associated password is correct
  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword) {
    return res.status(401).json({ errors: ['Wrong credentials'] })
  }

  // Generate access token
  const payload = { id: existingUser.id }
  const { accessToken } = generateToken({ payload })

  // Generate refresh token
  const { refreshToken, expiresIn } = generateRefreshToken({ payload })
  res.cookie('token', refreshToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true
  })

  return res.json({
    token: accessToken
  })
}

export default userLoginController
