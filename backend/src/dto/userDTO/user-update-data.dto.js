import { firstnameDTOSchema, lastnameDTOSchema, usernameDTOSchema } from '#dto/shared/dto-types.js'
import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'

const UpdateDataDTOSchema = Type.Object({
  name: firstnameDTOSchema,
  surname: lastnameDTOSchema,
  username: usernameDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
AddErrors(ajv)

const validateUpdateDataDTOSchema = ajv.compile(UpdateDataDTOSchema)

export default validateUpdateDataDTOSchema
