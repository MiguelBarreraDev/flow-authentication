import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text
} from '@chakra-ui/react'
import { EditIcon } from '../assets/EditIcon'
import { ExpandIcon } from '../assets/ExpandIcon'
import { ShowIcon } from '../assets/ShowIcon'

export const Profile: React.FC = () => {
  return (
    <Box>
      <Container px={{ base: 0, md: 4 }} maxW="8xl">
        <Box
          position="relative"
          w="100%"
          minH="280px"
          maxH="200px"
          bg="gray.200"
        >
          <Image
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            h="100%"
            w="100%"
            objectFit="cover"
            src="https://rare-gallery.com/mocahbig/434379-Black-Clover-Luck-Voltia-anime-boys-profile.png"
          />
          <Box
            display="flex"
            position="absolute"
            flexDir={{ base: 'column', md: 'row' }}
            h="100%"
            w="100%"
            minH={200}
            bottom={0}
            left={{ base: '50%', md: 4 }}
            transform={{
              base: 'translate(-50%, 50%)',
              md: 'translate(0, 50%)'
            }}
            alignItems="center"
          >
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Box position="relative" boxSize={200}>
                  <Image
                    transition="all .2s ease-in"
                    cursor="pointer"
                    boxSize="200px"
                    position="absolute"
                    borderRadius="full"
                    src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg"
                  />
                  <Flex
                    position="absolute"
                    top={0}
                    transition="all .2s linear"
                    cursor="pointer"
                    boxSize="200px"
                    borderRadius="full"
                    opacity={0}
                    _hover={{
                      opacity: 1,
                      background: '#2225'
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <ExpandIcon
                      style={{
                        color: '#FFF',
                        fontSize: '2em'
                      }}
                    />
                  </Flex>
                </Box>
              </PopoverTrigger>
              <PopoverContent
                _focusVisible={{
                  outline: '2px solid transparent',
                  outlineOffset: '2px'
                }}
                boxShadow="lg"
                w="150px"
              >
                <PopoverArrow />
                <PopoverBody px={0} display="flex" flexDir="column" gap={2}>
                  <Button
                    justifyContent="start"
                    leftIcon={<EditIcon />}
                    variant="outline"
                    borderRadius={0}
                    border={0}
                  >
                    <Text>Edit</Text>
                  </Button>
                  <Button
                    justifyContent="start"
                    leftIcon={<ShowIcon />}
                    variant="outline"
                    borderRadius={0}
                    border={0}
                  >
                    <Text>View</Text>
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Flex
              w={{ base: '100%', md: 'auto' }}
              alignSelf="end"
              h="50%"
              p={{ base: 0, md: '1em 1.5em' }}
              justifyContent="center"
            >
              <Text
                textAlign="center"
                alignSelf={{ base: 'center', md: 'start' }}
                fontSize="2xl"
                fontWeight="bold"
              >
                Username username
              </Text>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
