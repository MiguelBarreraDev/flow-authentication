import { useEffect, useState } from 'react'
import { profileService, refreshService } from '~/services/privates.service'
import { useUser } from './useUser'

export const useRecoveryUser = (): { loading: boolean } => {
  const [loading, setLoading] = useState(true)
  const { userDispatch } = useUser()

  useEffect(() => {
    const runServices = async (): Promise<void> => {
      try {
        const { token } = (await refreshService()) as { token: string }
        if (token === undefined) throw new Error('Expired token')
        userDispatch({
          type: 'updateUser',
          payload: { token }
        })

        const profileServiceResponse = await profileService(token)
        userDispatch({
          type: 'updateUser',
          payload: profileServiceResponse
        })

        setLoading(false)
      } catch (error) {
        // console.error(error)
        setLoading(false)
      }
    }

    void runServices()
  }, [])
  return { loading }
}
