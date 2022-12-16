import UserService from "#services/user.services.js"

const userService = new UserService()

const userDataController = async (req, res) => {
  const { id, body: dataToUpdate } = req

  if (!id)
    return res.status(401).json({ error: ['Unauthorized user'] })

  if (dataToUpdate.length === 0)
    return res.status(401).json({ error: ['The field or fields to update are not valid'] })

  await userService.update({ id, ...dataToUpdate })

  res.sendStatus(200)
}

export default userDataController
