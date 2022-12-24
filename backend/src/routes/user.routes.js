import userDataController from '#controllers/users/user-data.controller.js'
import userDeleteController from '#controllers/users/user-delete.controller.js'
import userLoginController from '#controllers/users/user-login.controller.js'
import { userLogoutController } from '#controllers/users/user-logout.controller.js'
import userPasswordController from '#controllers/users/user-password.controller.js'
import userPrfofileController from '#controllers/users/user-profile.controller.js'
import { userRefreshController } from '#controllers/users/user-refresh.controller.js'
import userSignupController from '#controllers/users/user-signup.controller.js'
import validateJWT from '#middlewares/validateJWT.js'
import { validateRefreshJWT } from '#middlewares/validateRefreshJWT.js'
import {
  validateLoginDTO,
  validateSignupDTO,
  validateUnsignupDTO,
  validateUpdateDataDTO,
  validateUpdatePasswordDTO
} from '#middlewares/validateUserDataDTO.js'
import { Router } from 'express'

const userRouter = Router()

userRouter
  .post('/signup', validateSignupDTO, userSignupController)
  .post('/login', validateLoginDTO, userLoginController)
  .get('/profile', validateJWT, userPrfofileController)
  .patch('/data', validateJWT, validateUpdateDataDTO, userDataController)
  .patch(
    '/password',
    validateJWT,
    validateUpdatePasswordDTO,
    userPasswordController
  )
  .delete('/', validateJWT, validateUnsignupDTO, userDeleteController)
  .get('/refresh', validateRefreshJWT, userRefreshController)
  .get('/logout', userLogoutController)

export default userRouter
