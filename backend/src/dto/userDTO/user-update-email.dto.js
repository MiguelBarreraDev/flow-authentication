import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from 'ajv-formats'
import AddErrors from 'ajv-errors'
import { emailDTOSchema, passwordDTOSchema } from "#dto/shared/dto-types.js"

const UpdateEmailDTOSchema = Type.Object({
  email: emailDTOSchema,
  password: passwordDTOSchema
})

const ajv = new Ajv({ allErrors: true }).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv, ['email'])
AddErrors(ajv)

const validateUpdateEmailDTOSchema = ajv.compile(UpdateEmailDTOSchema)

export default validateUpdateEmailDTOSchema
