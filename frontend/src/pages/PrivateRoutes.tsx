import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '~/components'
import { useAuth } from '~/hooks'

export const PrivateRoutes: React.FC = () => {
  const { isLogged } = useAuth()
  return (
    <Flex>
      {isLogged && <Sidebar />}
      <Box flex={1} w={isLogged ? 'auto' : '100%'}>
        <Header />
        <Outlet />
      </Box>
    </Flex>
  )
}
