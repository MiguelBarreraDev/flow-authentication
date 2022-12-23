import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'
import { nameDTOSchema, surnameDTOSchema, usernameDTOSchema } from '#dto/shared/dto-types.js'

const UpdateDataDTOSchema = Type.Object({
  name: nameDTOSchema,
  surname: surnameDTOSchema,
  username: usernameDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
AddErrors(ajv)

const validateUpdateDataDTOSchema = ajv.compile(UpdateDataDTOSchema)

export default validateUpdateDataDTOSchema
