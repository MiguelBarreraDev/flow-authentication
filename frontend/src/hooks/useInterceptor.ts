import { useEffect } from 'react'
import { refreshService } from '~/services/privates.service'
import { api } from '~/utils'
import { useAuth } from './useAuth'
import { useUser } from './useUser'

export const useInterceptor = (): void => {
  const { logout } = useAuth()
  const { userDispatch } = useUser()

  useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalConfig = error.config

        if (
          originalConfig.url !== '/users/refresh' &&
          error.response.status === 401 &&
          originalConfig._retry === undefined
        ) {
          originalConfig._retry = true

          try {
            const { token } = (await refreshService()) as { token: string }

            userDispatch({
              type: 'updateUser',
              payload: { token }
            })

            originalConfig.headers.Authorization = `Bearer ${token}`

            return await api(originalConfig)
          } catch (_error) {
            await logout()
            return await Promise.reject(_error)
          }
        }

        return await Promise.reject(error)
      }
    )
  }, [])
}
