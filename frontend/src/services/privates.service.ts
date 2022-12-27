import {
  LoginDataInterface,
  SignupDataInterface,
  UserInterface
} from '../types'
import { api } from '../utils'

export const loginService = async (
  data: LoginDataInterface
): Promise<UserInterface> => {
  const { data: body } = await api.post('/users/login', data, {
    withCredentials: true
  })
  return body
}

export const signupService = async (
  data: SignupDataInterface
): Promise<UserInterface> => {
  const { data: body } = await api.post('/users/signup', data, {
    withCredentials: true
  })
  return body
}

export const logoutService = async (): Promise<void> => {
  await api.get('/users/logout', {
    withCredentials: true
  })
}

export const profileService = async (token: string): Promise<UserInterface> => {
  const { data } = await api.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  })
  return data
}

export const refreshService = async (): Promise<
  { token: string } | { code: number; message: string }
> => {
  let result
  try {
    result = await api.get('/users/refresh', {
      withCredentials: true
    })
  } catch (error) {
    if (error instanceof Error) return { code: 401, message: error.message }
  }

  return result?.data
}
