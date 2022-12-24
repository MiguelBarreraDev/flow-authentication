import jsonwebtoken from 'jsonwebtoken'

const { JWT_PRIVATE_KEY, JWT_REFRESH_KEY } = process.env

export const generateToken = ({ payload }) => {
  const expiresIn = 60 * 15
  const accessToken = jsonwebtoken.sign(payload, JWT_PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn
  })
  return { accessToken, expiresIn }
}

export const verifyToken = (jwt) => jsonwebtoken.verify(jwt, JWT_PRIVATE_KEY)

export const generateRefreshToken = ({ payload }) => {
  const expiresIn = 60 * 60 * 24
  const refreshToken = jsonwebtoken.sign(payload, JWT_REFRESH_KEY, {
    algorithm: 'HS256',
    expiresIn
  })

  return { refreshToken, expiresIn }
}

export const verifyRefreshToken = (jwt) =>
  jsonwebtoken.verify(jwt, JWT_REFRESH_KEY)
