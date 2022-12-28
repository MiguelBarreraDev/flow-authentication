import { currentTime } from '~/utils'
import { ls } from '~/utils/ls'
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
  const { userState, userDispatch } = useUser()

  const login = async (data: LoginDataInterface): Promise<void> => {
    const serviceResponse = await loginService(data)
    ls.setItem('isLogged', currentTime(true) as string)
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
    ls.removeItem('isLogged')
    userDispatch({
      type: 'resetUser'
    })
  }

  return { login, signup, logout, isLogged: Boolean(userState.token) }
}
