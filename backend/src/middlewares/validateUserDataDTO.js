import validateUnsingupDTOSchema from '#dto/userDTO/user-delete.dto.js'
import validateLoginDTOSchema from '#dto/userDTO/user-login.dto.js'
import validateSignupDTOSchema from '#dto/userDTO/user-signup.dto.js'
import validateUpdateDataDTOSchema from '#dto/userDTO/user-update-data.dto.js'
import validateUpdatePasswordDTOSchema from '#dto/userDTO/user-update-password.dto.js'

export const validateSignupDTO = (req, res, next) => {
  const isDTOValid = validateSignupDTOSchema(req.body)

  if (!isDTOValid) {
    return res.status(400).json({
      errors: validateSignupDTOSchema.errors.map((error) => error.message)
    })
  }

  next()
}

export const validateLoginDTO = (req, res, next) => {
  const isDTOValid = validateLoginDTOSchema(req.body)

  if (!isDTOValid) {
    return res.status(400).json({
      errors: validateLoginDTOSchema.errors.map((error) => error.message)
    })
  }

  next()
}

export const validateUpdateDataDTO = (req, res, next) => {
  const isDTOValid = validateUpdateDataDTOSchema(req.body)

  if (!isDTOValid) {
    return res.status(400).json({
      errors: validateUpdateDataDTOSchema.errors.map((error) => error.message)
    })
  }

  next()
}

export const validateUpdatePasswordDTO = (req, res, next) => {
  const isDTOValid = validateUpdatePasswordDTOSchema(req.body)

  if (!isDTOValid) {
    return res.status(400).json({
      errors: validateUpdatePasswordDTOSchema.errors.map(
        (error) => error.message
      )
    })
  }

  next()
}

export const validateUnsignupDTO = (req, res, next) => {
  const isDTOValid = validateUnsingupDTOSchema(req.body)

  if (!isDTOValid) {
    return res.status(400).json({
      errors: validateUnsingupDTOSchema.errors.map((error) => error.message)
    })
  }

  next()
}
