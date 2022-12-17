import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface LoginProps {
  onClose: () => void
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async (values) => {
    console.log(values)
  })

  return (
    <Box flex={1} display="flex" flexDir="column" pos="relative">
      <ModalHeader>Log In</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <form onSubmit={onSubmit} id="form-login" noValidate>
          <FormControl isRequired isInvalid={Boolean(errors.username)}>
            <FormLabel>Username</FormLabel>
            <Input
              {...register('username', { required: 'This field is required' })}
              placeholder="Username"
            />
            <FormErrorMessage>
              {errors.username?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={Boolean(errors.password)}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password', {
                required: 'This field is required'
              })}
              placeholder="Password"
            />

            <FormErrorMessage>
              {errors.password?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
        </form>
      </ModalBody>

      <ModalFooter>
        <Button type="submit" form="form-login" colorScheme="purple" mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Box>
  )
}
