import { useEffect } from 'react'

import useSWR from 'swr'

export const useUser = (): {} => {
  const { data } = useSWR('/users/profile')

  useEffect(() => {
    console.log({ data })
  }, [data])
  return {}
}
