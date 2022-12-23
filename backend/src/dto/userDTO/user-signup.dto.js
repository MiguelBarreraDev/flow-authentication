import {
  firstnameDTOSchema,
  lastnameDTOSchema,
  passwordDTOSchema,
  usernameDTOSchema
} from '#dto/shared/dto-types.js'
import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'

const SignupDTOSchema = Type.Object({
  firstname: firstnameDTOSchema,
  lastname: lastnameDTOSchema,
  username: usernameDTOSchema,
  password: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true })
  .addKeyword('kind')
  .addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

AddErrors(ajv)

const validateSignupDTOSchema = ajv.compile(SignupDTOSchema)

export default validateSignupDTOSchema
