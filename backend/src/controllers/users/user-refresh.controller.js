import { generateToken } from '#utils/jwt.utils.js'

export const userRefreshController = (req, res) => {
  // Generate a JWT for the user who logs in to the application
  const payload = { id: req.id }
  const { accessToken } = generateToken({ payload })

  return res.json({ token: accessToken })
}
