import {
  Box,
  Button,
  Divider,
  Heading,
  Stack,
  Text,
  useTheme
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { DashboardIcon, ProfileIcon, TableIcon } from '~/assets'

export const Sidebar: React.FC = () => {
  const { sidebar } = useTheme()
  const activeStyle = {
    backgroundColor: '#805AD5'
  }

  return (
    <Box
      bg="gray.800"
      color="white"
      minH="100vh"
      w={sidebar.isOpen === true ? '240px' : '45px'}
      transition=".2s linear"
    >
      <Box py={2} display="flex" justifyContent="center" alignItems="center">
        <Heading textAlign="center">A</Heading>
      </Box>
      <Divider mb={4} />
      <Box>
        <Box as="nav">
          <Stack gap={4} alignItems="center">
            <Button
              to="/"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              gap={2}
              w="90%"
              display="flex"
              justifyContent="start"
              variant="unstyled"
            >
              <Box px={1}>
                <DashboardIcon style={{ fontSize: '2em' }} />
              </Box>
              <Text fontSize="md" fontWeight="normal">
                Dashboard
              </Text>
            </Button>
            <Button
              to="/tables"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              gap={2}
              w="90%"
              display="flex"
              justifyContent="start"
              variant="unstyled"
            >
              <Box px={1}>
                <TableIcon style={{ fontSize: '2em' }} />
              </Box>
              <Text fontSize="md" fontWeight="normal">
                Tables
              </Text>
            </Button>
            <Button
              to="/profile"
              as={NavLink}
              _hover={{ bg: 'gray.500' }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              gap={2}
              w="90%"
              display="flex"
              justifyContent="start"
              variant="unstyled"
            >
              <Box px={1}>
                <ProfileIcon style={{ fontSize: '2em' }} />
              </Box>
              <Text fontSize="md" fontWeight="normal">
                Profile
              </Text>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
