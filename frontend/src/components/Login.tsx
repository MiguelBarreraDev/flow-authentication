import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react'

interface LoginProps {
  onClose: () => void
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <Box flex={1} display="flex" flexDir="column" pos="relative">
      <ModalHeader>Log In</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Last name</FormLabel>
          <Input placeholder="Last name" />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="purple" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Box>
  )
}
