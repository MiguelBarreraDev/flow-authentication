import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'
import { passwordDTOSchema, usernameDTOSchema } from '#dto/shared/dto-types.js'

const LoginDTOSchema = Type.Object({
  username: usernameDTOSchema,
  password: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

AddErrors(ajv)

const validateLoginDTOSchema = ajv.compile(LoginDTOSchema)

export default validateLoginDTOSchema
