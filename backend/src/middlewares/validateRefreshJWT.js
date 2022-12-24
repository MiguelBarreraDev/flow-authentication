import { verifyRefreshToken } from '#utils/jwt.utils.js'

export const validateRefreshJWT = (req, res, next) => {
  const message = 'Unauthorized user'
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) return res.status(401).json({ errors: [message] })

  try {
    const payload = verifyRefreshToken(refreshToken)

    req.id = payload?.id
    next()
  } catch (error) {
    return res.status(401).json({ errors: [message] })
  }
}
