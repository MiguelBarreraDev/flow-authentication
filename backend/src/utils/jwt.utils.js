import jsonwebtoken from 'jsonwebtoken'

const { JWT_PRIVATE_KEY } = process.env

export const signJWT = ({ payload }) => {
  const token = jsonwebtoken.sign(payload, JWT_PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })
  return token
}

export const verifyJWT = (jwt) => jsonwebtoken.verify(jwt, JWT_PRIVATE_KEY)
