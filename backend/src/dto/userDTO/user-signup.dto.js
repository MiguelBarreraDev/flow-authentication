import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import AddErrors from 'ajv-errors'
import {
  emailDTOSchema,
  nameDTOSchema,
  passwordDTOSchema,
  surnameDTOSchema,
  usernameDTOSchema
} from '#dto/shared/dto-types.js'

const SignupDTOSchema = Type.Object({
  name: nameDTOSchema,
  surname: surnameDTOSchema,
  username: usernameDTOSchema,
  email: emailDTOSchema,
  password: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv, ['email'])
AddErrors(ajv)

const validateSignupDTOSchema = ajv.compile(SignupDTOSchema)

export default validateSignupDTOSchema
