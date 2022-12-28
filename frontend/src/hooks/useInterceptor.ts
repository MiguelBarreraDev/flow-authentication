import { useEffect } from 'react'
import { refreshService } from '~/services/privates.service'
import { api, currentTime } from '~/utils'
import { ls } from '~/utils/ls'
import { useAuth } from './useAuth'
import { useUser } from './useUser'

export const useInterceptor = (): void => {
  const { logout } = useAuth()
  const { userDispatch } = useUser()

  useEffect(() => {
    api.interceptors.request.use(async (config) => {
      const isLogged = window.localStorage.getItem('isLogged')

      if (isLogged !== null)
        ls.setItem('last_activity', currentTime(true) as string)

      return config
    })

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
