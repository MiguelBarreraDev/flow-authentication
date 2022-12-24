export interface UserInterface {
  id: string
  firstname: string
  lastname: string
  username: string
  imageUrl?: string
  token: string
}

export interface LoginDataInterface {
  username: string
  password: string
}

export interface SignupDataInterface {
  firstname: string
  lastname: string
  username: string
  password: string
}

export interface useAuthInterface {
  signup: (data: SignupDataInterface) => Promise<void>
  login: (data: LoginDataInterface) => Promise<void>
  logout: () => Promise<void>
}
