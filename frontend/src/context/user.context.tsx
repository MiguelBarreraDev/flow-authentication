import React, { ReactElement, createContext, useReducer } from 'react'
import { UserInterface } from '../types'

export interface ActionUserInterface {
  type: string
  payload?: {} | UserInterface
}

export interface UserContextInterface {
  userState: UserInterface
  userDispatch: (arg0: ActionUserInterface) => void
}

export const userContext = createContext<UserContextInterface | null>(null)

const initialState: UserInterface = {
  id: '',
  firstname: '',
  lastname: '',
  username: '',
  imageUrl: '',
  token: ''
}

const reducer = (
  state: UserInterface,
  action: ActionUserInterface
): UserInterface => {
  switch (action.type) {
    case 'createUser':
      return { ...(action.payload as UserInterface) }
    case 'updateUser':
      return { ...state, ...action.payload }
    case 'resetUser':
      return initialState
    default:
      return initialState
  }
}

interface UserContextProviderProps {
  children: JSX.Element | ReactElement
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </userContext.Provider>
  )
}
