import UserService from '#services/user.services.js'

const userPrfofileController = async (req, res) => {
  const { id } = req

  const existingUser = await UserService.findById(id)
  if (!existingUser) {
    return res.status(401).json({ errors: ['Unauthorized user'] })
  }

  return res.json({
    id: existingUser.id,
    firstname: existingUser.firstname,
    lastname: existingUser.lastname,
    username: existingUser.username
  })
}

export default userPrfofileController
