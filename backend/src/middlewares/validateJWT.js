import { verifyJWT } from '#utils/jwt.utils.js'

const validateJWT = async (req, res, next) => {
  const message = 'Unauthorized user'
  const { authorization: jwt } = req.headers
  if (!jwt) return res.status(401).json({ errors: [message] })

  try {
    const payload = verifyJWT({ jwt })

    req.id = payload?.id
    next()
  } catch (error) {
    return res.status(401).json({ errors: [message] })
  }
}

export default validateJWT
