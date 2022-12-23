import { loginService, signupService } from '../services/privates.service'
import {
  LoginDataInterface,
  SignupDataInterface,
  useAuthInterface
} from '../types'

export const useAuth = (): useAuthInterface => {
  const login = async (data: LoginDataInterface): Promise<void> => {
    const serviceResponse = await loginService(data)
  }

  const signup = async (data: SignupDataInterface): Promise<void> => {
    const serviceResponse = await signupService(data)
  }

  const logout = (): void => {}

  return { login, signup, logout }
}
