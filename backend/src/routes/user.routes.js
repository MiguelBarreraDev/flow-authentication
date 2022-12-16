import userDataController from "#controllers/users/user-data.controller.js";
import userDeleteController from "#controllers/users/user-delete.controller.js";
import userEmailController from "#controllers/users/user-email.controller.js";
import userLoginController from "#controllers/users/user-login.controller.js";
import userPasswordController from "#controllers/users/user-password.controller.js";
import userPrfofileController from "#controllers/users/user-profile.controller.js";
import userSignupController from "#controllers/users/user-signup.controller.js";
import validateJWT from "#middlewares/validateJWT.js";
import {
  validateLoginDTO,
  validateSignupDTO,
  validateUnsignupDTO,
  validateUpdateDataDTO,
  validateUpdateEmailDTO,
  validateUpdatePasswordDTO
} from "#middlewares/validateUserDataDTO.js";
import { Router } from "express";

const userRouter = Router()

userRouter
  .post('/signup', validateSignupDTO, userSignupController)
  .post('/login', validateLoginDTO, userLoginController)
  .get('/profile', validateJWT, userPrfofileController)
  .patch('/data', validateJWT, validateUpdateDataDTO, userDataController)
  .patch('/email', validateJWT, validateUpdateEmailDTO, userEmailController)
  .patch('/password', validateJWT, validateUpdatePasswordDTO, userPasswordController)
  .delete('/', validateJWT, validateUnsignupDTO, userDeleteController)

export default userRouter
