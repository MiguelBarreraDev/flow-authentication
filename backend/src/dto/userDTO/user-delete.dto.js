import { Type } from '@sinclair/typebox'
import { passwordDTOSchema } from '#dto/shared/dto-types.js'
import Ajv from 'ajv'
import AddErrors from 'ajv-errors'

const UnsignupDTOSchema = Type.Object({
  password: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

AddErrors(ajv)

const validateUnsingupDTOSchema = ajv.compile(UnsignupDTOSchema)

export default validateUnsingupDTOSchema
