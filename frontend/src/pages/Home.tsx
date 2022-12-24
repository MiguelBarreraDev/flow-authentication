import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'

export const Home: React.FC = () => {
  const { logout } = useAuth()
  const handleLogout = async (): Promise<void> => {
    await logout()
  }

  return (
    <Box w="100%">
      <Container maxW="8xl" px={2}>
        <Heading textAlign="center" size={'xl'}>
          Home
        </Heading>
        <Button
          onClick={handleLogout}
          colorScheme="gray"
          variant="solid"
          shadow="md"
        >
          Log out
        </Button>
      </Container>
    </Box>
  )
}
