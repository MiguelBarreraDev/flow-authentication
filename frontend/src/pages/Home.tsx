import {
  Box,
  Button,
  Container,
  Heading,
  ListItem,
  Stack,
  UnorderedList
} from '@chakra-ui/react'
import { useState } from 'react'
import { useUser } from '~/hooks'
import { profileService } from '~/services/privates.service'
import { UserInterface } from '~/types'
import { useAuth } from '../hooks/useAuth'

export const Home: React.FC = () => {
  const [data, setData] = useState<UserInterface | null>(null)
  const { userState } = useUser()
  const { logout } = useAuth()
  const handleLogout = async (): Promise<void> => {
    await logout()
  }

  const handleRecoveryData = async (): Promise<void> => {
    setData(null)
    const profileServiceResponse = await profileService(userState?.token)
    setData(profileServiceResponse)
  }

  return (
    <Box w="100%">
      <Container maxW="8xl" px={2}>
        <Heading textAlign="center" size={'xl'}>
          Comprar paño de microfibra
        </Heading>
      </Container>
      <Container maxW="8xl" px={2} centerContent>
        <Stack>
          <Button onClick={handleLogout} colorScheme="gray" variant="outline">
            Log out
          </Button>
          <Button onClick={handleRecoveryData} variant="outline">
            Recovery data
          </Button>
        </Stack>
        <Container py={20} centerContent>
          <UnorderedList>
            {data != null &&
              Object.keys(data).map((key) => (
                <ListItem key={key}>
                  <strong>{key}: </strong>
                  {data[key as keyof typeof data]}
                </ListItem>
              ))}
          </UnorderedList>
        </Container>
      </Container>
    </Box>
  )
}
