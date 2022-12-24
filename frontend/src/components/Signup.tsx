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
import { useAuth } from '../hooks/useAuth'
import { SignupDataInterface } from '../types'

interface SignupProps {
  onClose: () => void
}

export const Signup: React.FC<SignupProps> = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()
  const { signup } = useAuth()

  const onSubmit = handleSubmit(async (values) => {
    await signup(values as SignupDataInterface)
    console.log(values)
  })

  return (
    <Box flex={1} display="flex" flexDir="column" pos="relative">
      <ModalHeader>Create your account</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <form onSubmit={onSubmit} id="form-signup" noValidate>
          <FormControl isRequired isInvalid={Boolean(errors.firstname)}>
            <FormLabel>First name</FormLabel>
            <Input
              {...register('firstname', {
                required: 'This field is required'
              })}
              placeholder="First name"
            />
            <FormErrorMessage>
              {errors.firstname?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={Boolean(errors.lastname)}>
            <FormLabel>Last name</FormLabel>
            <Input
              {...register('lastname', {
                required: 'This field is required'
              })}
              placeholder="Last name"
            />
            <FormErrorMessage>
              {errors.lastname?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={Boolean(errors.username)}>
            <FormLabel>Username</FormLabel>
            <Input
              {...register('username', {
                required: 'This field is required'
              })}
              placeholder="Username"
            />
            <FormErrorMessage>
              {errors.username?.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={Boolean(errors.password)}>
            <FormLabel>Password</FormLabel>
            <Input
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
        <Button
          isLoading={isSubmitting}
          loadingText="save"
          type="submit"
          form="form-signup"
          colorScheme="purple"
          mr={3}
        >
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Box>
  )
}
