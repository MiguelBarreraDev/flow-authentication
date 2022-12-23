import UserService from '#services/user.services.js'

const userService = new UserService()

const userPrfofileController = async (req, res) => {
  const { id } = req

  const existingUser = await userService.findById(id)
  if (!existingUser) { return res.status(401).json({ errors: ['Unauthorized user'] }) }

  return res.json({
    id: existingUser.id,
    name: existingUser.name,
    surname: existingUser.surname,
    username: existingUser.username,
    email: existingUser.email
  })
}

export default userPrfofileController
