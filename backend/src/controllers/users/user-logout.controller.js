export const userLogoutController = (req, res) => {
  res.clearCookie('refreshToken')
  return res.end()
}
