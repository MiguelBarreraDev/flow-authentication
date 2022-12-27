import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link as LinkFromReacRouter } from 'react-router-dom'
import { useAuth } from '~/hooks/useAuth'
import { useUser } from '~/hooks/useUser'
import { Login } from './Login'
import { Signup } from './Signup'

const MotionBox = motion(Box)

export const Header: React.FC = () => {
  const { isLogged } = useAuth()
  const { userState } = useUser()
  const [position, setPosition] = useState<string>('none')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = (currentPos: string): void => {
    setPosition(currentPos === 'login' ? 'signup' : 'login')
    onOpen()
  }

  const handleAnimate = (): void => {
    setPosition(position === 'login' ? 'signup' : 'login')
  }

  return (
    <Flex
      pos="sticky"
      top={0}
      zIndex={800}
      boxShadow="sm"
      px={2}
      py={2}
      as="nav"
      w="100%"
      bg="white"
    >
      <Container
        px={{ base: 0, sm: 4 }}
        maxW="8xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text as={LinkFromReacRouter} to="/" fontSize="2xl" fontWeight="bold">
            Auth.js
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap={{ base: 2, lg: 4 }}>
          {isLogged ? (
            <Avatar
              size="md"
              name={`${userState.firstname} ${userState.lastname}`}
            />
          ) : (
            <>
              <Button
                onClick={() => handleOpen('login')}
                colorScheme="purple"
                px={{ base: 6, lg: 8 }}
                variant="outline"
              >
                <Text>Log In</Text>
              </Button>
              <Button
                onClick={() => handleOpen('signup')}
                colorScheme="purple"
                px={{ base: 6, lg: 8 }}
              >
                <Text>Sign Up</Text>
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                <ModalOverlay />
                <ModalContent
                  overflow="hidden"
                  display="flex"
                  flexDir="row"
                  minH="xl"
                  pos="relative"
                >
                  <Login onClose={onClose} />
                  <Signup onClose={onClose} />
                  <MotionBox
                    cursor="pointer"
                    onClick={handleAnimate}
                    initial={
                      position !== 'none' && {
                        left: position === 'login' ? '0' : '50%'
                      }
                    }
                    variants={{
                      toLeft: { left: '0' },
                      toRight: { left: '50%' }
                    }}
                    animate={
                      position !== 'none' &&
                      (position === 'login' ? 'toLeft' : 'toRight')
                    }
                    transition={{
                      duration: 1,
                      type: 'spring',
                      bounce: 0.2
                    }}
                    pos="absolute"
                    w="50%"
                    h="100%"
                    bg="gray.700"
                  />
                </ModalContent>
              </Modal>
            </>
          )}
        </Box>
      </Container>
    </Flex>
  )
}
