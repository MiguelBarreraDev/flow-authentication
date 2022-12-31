import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import {
  Link as LinkFromReacRouter,
  useLocation,
  useNavigate
} from 'react-router-dom'
import { HomeIcon, MenuClose, MenuOpen } from '~/assets'
import { useAuth } from '~/hooks/useAuth'
import { useUser } from '~/hooks/useUser'
import { Login } from './Login'
import { Signup } from './Signup'

const MotionBox = motion(Box)

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const ref = useRef(null) as React.RefObject<HTMLButtonElement> | undefined
  const { isLogged, logout } = useAuth()
  const { userState } = useUser()
  const [position, setPosition] = useState<string>('none')
  const { sidebar } = useTheme()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

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
      boxShadow={isLogged ? 'none' : 'sm'}
      px={2}
      py={2}
      as="nav"
      w="100%"
      bg="white"
    >
      <Container
        px={{ base: 0, sm: 4 }}
        maxW={isLogged ? `100%` : '8xl'}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          {isLogged && (
            <IconButton
              display="flex"
              onClick={() => sidebar.onToggle()}
              icon={
                (sidebar.isOpen as boolean) ? (
                  <MenuOpen style={{ fontSize: '1.5em' }} />
                ) : (
                  <MenuClose style={{ fontSize: '1.5em' }} />
                )
              }
              aria-label="close menu"
              variant="unstyled"
            />
          )}
          <Text
            as={LinkFromReacRouter}
            to={pathname}
            fontSize={isLogged ? 'lg' : '2xl'}
            fontWeight={isLogged ? 'semibold' : 'bold'}
            color={isLogged ? 'gray.500' : 'gray.800'}
            display="flex"
            alignItems="center"
            textTransform={isLogged ? 'capitalize' : 'none'}
          >
            {isLogged && <HomeIcon />}
            {isLogged ? pathname : 'Auth.js'}
          </Text>
        </Flex>
        <Box display="flex" alignItems="center" gap={{ base: 2, lg: 4 }}>
          {isLogged ? (
            <>
              <Menu>
                <MenuButton ref={ref} as={Box} cursor="pointer">
                  <Avatar
                    bg="gray.500"
                    onClick={() => console.log(ref?.current?.click())}
                    size="sm"
                    name={`${userState.firstname} ${userState.lastname}`}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={async () => navigate('/profile')}>
                    Profile
                  </MenuItem>
                  <MenuItem>My account</MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={async () => {
                      await logout()
                      navigate('/')
                    }}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
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
