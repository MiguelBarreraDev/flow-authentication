export interface UserInterface {
  first_name: string
  last_name: string
  username: string
  token: string
}

export interface LoginDataInterface {
  username: string
  password: string
}

export interface SignupDataInterface {
  first_name: string
  last_name: string
  username: string
  password: string
}

export interface useAuthInterface {
  signup: (data: SignupDataInterface) => Promise<void>
  login: (data: LoginDataInterface) => Promise<void>
  logout: () => void
}
