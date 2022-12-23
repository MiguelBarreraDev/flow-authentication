import { Type } from '@sinclair/typebox'

export const firstnameDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    type: 'The type of the name is not valid, it must be a string',
    minLength: 'The name must have at leas 2 characters'
  }
})

export const lastnameDTOSchema = Type.String({
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

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 8,
  errorMessage: {
    type: 'The type of the password is not valid',
    format: 'The format of the password is not valid'
  }
})
