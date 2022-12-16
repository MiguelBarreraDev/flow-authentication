import { hash } from 'bcrypt'
import { signJWT } from '#utils/jwt.utils.js'
import { v4 as uuidv4 } from 'uuid'
import UserService from '#services/user.services.js'

const userService = new UserService()

const userSignupController = async (req, res) => {
  const { name, surname, username, email, password } = req.body

  const existingUserByUsername = await userService.findBy({ username })
  if (existingUserByUsername)
    return res
      .status(409)
      .json({ errors: ['There is already a user with this username'] })

  const existingUserByEmail = await userService.findBy({ email })
  if (existingUserByEmail)
    return res
      .status(409)
      .json({ errors: ['There is already a user with this email'] })

  // Create new user
  const id = uuidv4()
  const hashedPassword = await hash(password, 10) // TODO: investigate how it works
  const user = await userService.create({
    id,
    name,
    surname,
    username,
    email,
    password: hashedPassword
  })

  // Generate a JWT for the user who logs in to the application
  const payload = { id}
  const jwt = signJWT({ payload })

  res.status(201).json({
    id: user.id,
    name: user.name,
    surname: user.surname,
    username: user.username,
    email: user.email,
    jwt
  })
}

export default userSignupController
