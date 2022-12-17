import axios, { AxiosResponse } from 'axios'
import { User } from '../models'

axios.defaults.baseURL = import.meta.env.VITE_API_URI

interface LoginServiceInterface {
  url: string
  data: {
    username: string
    password: string
  }
}

export const loginService = async ({
  url,
  data
}: LoginServiceInterface): Promise<User> => {
  const { data: body }: AxiosResponse<User> = await axios.post<User>(url, data)
  return body
}

interface SignupServiceInterface {
  url: string
  data: {
    first_name: string
    last_name: string
    username: string
    mail: string
    password: string
  }
}
export const SignupService = async ({
  url,
  data
}: SignupServiceInterface): Promise<User> => {
  const { data: body }: AxiosResponse<User> = await axios.post<User>(url, data)
  return body
}
