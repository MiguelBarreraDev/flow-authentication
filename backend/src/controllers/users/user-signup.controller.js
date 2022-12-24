import UserService from '#services/user.services.js'
import { generateRefreshToken, generateToken } from '#utils/jwt.utils.js'
import { hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const userSignupController = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body

  const existingUserByUsername = await UserService.findBy({ username })
  if (existingUserByUsername) {
    return res
      .status(409)
      .json({ errors: ['There is already a user with this username'] })
  }

  const existingUserByEmail = await UserService.findBy({ email })
  if (existingUserByEmail) {
    return res
      .status(409)
      .json({ errors: ['There is already a user with this email'] })
  }

  // Create new user
  const id = uuidv4()
  const hashedPassword = await hash(password, 10) // TODO: investigate how it works
  const user = UserService.create({
    id,
    firstname,
    lastname,
    username,
    email,
    password: hashedPassword
  })

  // Generate access token
  const payload = { id }
  const { accessToken } = generateToken({ payload })

  // Generate refresh token
  const { refreshToken, expiresIn } = generateRefreshToken({ payload })
  res.cookie('token', refreshToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true
  })

  res.status(201).json({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    token: accessToken
  })
}

export default userSignupController
