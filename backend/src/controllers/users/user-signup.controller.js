import UserService from '#services/user.services.js'
import { signJWT } from '#utils/jwt.utils.js'
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

  // Generate a JWT for the user who logs in to the application
  const payload = { id }
  const jwt = signJWT({ payload })

  res.status(201).json({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    jwt
  })
}

export default userSignupController
