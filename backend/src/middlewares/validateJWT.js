import { verifyJWT } from '#utils/jwt.utils.js'

const validateJWT = async (req, res, next) => {
  const message = 'Unauthorized user'
  const jwt = req.headers.authorization?.split('Bearer ')[1]
  if (!jwt) return res.status(401).json({ errors: [message] })

  try {
    const payload = verifyJWT(jwt)

    req.id = payload?.id
    next()
  } catch (error) {
    return res.status(401).json({ errors: [message] })
  }
}

export default validateJWT
