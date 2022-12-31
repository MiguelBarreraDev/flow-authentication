import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useOutsideClick,
  useTheme
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { DashboardIcon, ProfileIcon, TableIcon } from '~/assets'

const TextMotion = motion(Text)

const LabelLink: React.FC<{ label: string; visible: boolean }> = ({
  label,
  visible
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <TextMotion
          overflow="hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.1
          }}
          fontSize="md"
          fontWeight="normal"
        >
          {label}
        </TextMotion>
      )}
    </AnimatePresence>
  )
}

export const Sidebar: React.FC = () => {
  const sidebarRef = useRef() as React.LegacyRef<HTMLDivElement>
  const { sidebar } = useTheme()
  const activeStyle = {
    backgroundColor: '#805AD5'
  }

  useOutsideClick({
    ref: sidebarRef as React.RefObject<HTMLElement>,
    handler: () => sidebar.onClose()
  })

  return (
    <Box
      ref={sidebarRef}
      bg="gray.800"
      color="white"
      minH="100vh"
      w={sidebar.isOpen === true ? '240px' : '45px'}
      transition=".2s linear"
    >
      <Box
        h="56px"
        py={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          overflow="hidden"
          whiteSpace="nowrap"
          textAlign="center"
          fontWeight="bold"
          size="lg"
          w="90%"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {(sidebar.isOpen as boolean) ? (
              <motion.div
                key="Auth.js"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2
                }}
              >
                Auth.js
              </motion.div>
            ) : (
              <motion.div
                key="A"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.2
                }}
              >
                A
              </motion.div>
            )}
          </AnimatePresence>
        </Heading>
      </Box>
      <Divider mb={4} />
      <Box>
        <Box as="nav" overflow="hidden">
          <Stack gap={2} alignItems="center">
            <Button
              to="/"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              w="90%"
              display="flex"
              justifyContent={(sidebar.isOpen as boolean) ? 'start' : 'center'}
              variant="unstyled"
            >
              <Flex px={2} gap={2} flex={1}>
                <DashboardIcon
                  style={{
                    fontSize: '1.5em'
                  }}
                />
                <LabelLink label="Dashboard" visible={sidebar.isOpen} />
              </Flex>
            </Button>
            <Button
              to="/tables"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              gap={2}
              w="90%"
              display="flex"
              alignItems="center"
              justifyContent={(sidebar.isOpen as boolean) ? 'start' : 'center'}
              variant="unstyled"
            >
              <Flex px={2} gap={2} flex={1}>
                <TableIcon
                  style={{
                    fontSize: '1.5em'
                  }}
                />
                <LabelLink label="Tables" visible={sidebar.isOpen} />
              </Flex>
            </Button>
            <Button
              to="/profile"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              gap={2}
              w="90%"
              display="flex"
              justifyContent={(sidebar.isOpen as boolean) ? 'start' : 'center'}
              variant="unstyled"
            >
              <Flex px={2} gap={2} flex={1}>
                <ProfileIcon
                  style={{
                    fontSize: '1.5em'
                  }}
                />
                <LabelLink label="Profile" visible={sidebar.isOpen} />
              </Flex>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
