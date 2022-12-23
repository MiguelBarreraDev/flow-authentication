import jsonwebtoken from 'jsonwebtoken'

const { JWT_PRIVATE_KEY } = process.env

export const signJWT = ({ payload }) => {
  const token = jsonwebtoken.sign(payload, JWT_PRIVATE_KEY, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })

  return token
}

export const verifyJWT = ({ jwt }) => {
  const jwtFragment = jwt.split(' ')[1]
  return jsonwebtoken.verify(jwtFragment, JWT_PRIVATE_KEY)
}
