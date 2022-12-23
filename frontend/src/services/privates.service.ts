import {
  LoginDataInterface,
  SignupDataInterface,
  UserInterface
} from '../types'
import { api } from '../utils'

export const loginService = async (
  data: LoginDataInterface
): Promise<UserInterface> => {
  const { data: body } = await api.post('/users/login', data)
  return body
}

export const signupService = async (
  data: SignupDataInterface
): Promise<UserInterface> => {
  const { data: body } = await api.post('/users/signup', data)
  return body
}