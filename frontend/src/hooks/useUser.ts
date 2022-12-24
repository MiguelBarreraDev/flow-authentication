import { useContext } from 'react'
import { UserContextInterface, userContext } from '../context'

export const useUser = (): UserContextInterface =>
  useContext(userContext) as UserContextInterface
