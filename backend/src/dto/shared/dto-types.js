import { Type } from '@sinclair/typebox'

export const idDTOSchema = Type.String({
  format: 'uuid',
  errorMessage: {
    type: 'The type of the _id is not valid, it must be a string',
    format: 'The format of the _id is not valid, it must be a uuidv4'
  }
})

export const nameDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    type: 'The type of the name is not valid, it must be a string',
    minLength: 'The name must have at leas 2 characters'
  }
})

export const surnameDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    type: 'The type of the surname is not valid, it must be a string',
    minLength: 'The name must have at leas 2 characters'
  }
})

export const usernameDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    type: 'The type of the username is not valid, it must be a string',
    minLength: 'The name must have at leas 2 characters'
  }
})

export const emailDTOSchema = Type.String({
  format: 'email',
  errorMessage: {
    type: 'The type of the email is not valid, it must be a string',
    format: 'The format of the email is not valid, it must cumply with RFC 5322'
  }
})

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 8,
  errorMessage: {
    type: 'The type of the password is not valid',
    format: 'The format of the password is not valid'
  }
})
