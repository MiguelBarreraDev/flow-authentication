import {
  loginService,
  logoutService,
  signupService
} from '../services/privates.service'
import {
  LoginDataInterface,
  SignupDataInterface,
  useAuthInterface
} from '../types'
import { useUser } from './useUser'

export const useAuth = (): useAuthInterface => {
  const { userDispatch } = useUser()
  const login = async (data: LoginDataInterface): Promise<void> => {
    const serviceResponse = await loginService(data)
    userDispatch({
      type: 'createUser',
      payload: serviceResponse
    })
  }

  const signup = async (data: SignupDataInterface): Promise<void> => {
    const serviceResponse = await signupService(data)
    userDispatch({
      type: 'createUser',
      payload: serviceResponse
    })
  }

  const logout = async (): Promise<void> => {
    await logoutService()
    userDispatch({
      type: 'resetUser'
    })
  }

  return { login, signup, logout }
}
