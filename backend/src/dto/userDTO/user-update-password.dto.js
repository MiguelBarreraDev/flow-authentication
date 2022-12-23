import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'
import { passwordDTOSchema } from '#dto/shared/dto-types.js'

const UpdatePasswordDTOSchema = Type.Object({
  oldPassword: passwordDTOSchema,
  newPassword: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

AddErrors(ajv)

const validateUpdatePasswordDTOSchema = ajv.compile(UpdatePasswordDTOSchema)

export default validateUpdatePasswordDTOSchema
