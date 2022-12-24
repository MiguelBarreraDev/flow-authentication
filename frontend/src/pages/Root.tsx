import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AuthIlustration } from '../assets/AuthIlustration'
import { Wave } from '../assets/Wave'

const MotionBox = motion(Box)

export const Root: React.FC = () => {
  return (
    <Box w="100%" maxW="">
      <Container
        pos="relative"
        maxW="8xl"
        px={2}
        display="flex"
        flexDir={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent={{
          base: 'space-evenly',
          // sm: 'center',
          lg: 'space-around'
        }}
        minH="calc(100vh - 56px)"
        pb={{ base: 100, lg: 200 }}
        gap={{ base: 6, lg: 4 }}
      >
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          display="flex"
          flexDirection="column"
          gap={{ base: 10, sm: 4 }}
        >
          <Heading
            as="h3"
            fontSize={{ base: 'clamp(2.4em, 6vw, 7em)', lg: '5xl' }}
            maxW={{ base: '100%', lg: '30ch' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text color="purple.400" display="inline">
              Lorem ipsum{' '}
            </Text>
            <Text display="inline">
              dolor sit amet consectetur adipisicing elit.
            </Text>
          </Heading>
          <Text
            maxW={{ base: '100%', lg: '60ch' }}
            fontSize={{ base: 'clamp(1.2em, 4vw, 1.5em)', lg: 'xl' }}
            color="gray.400"
            textAlign={{ base: 'center', lg: 'left' }}
            borderLeft={{ lg: '1px' }}
            pl={2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ratione minus officia, quasi fuga maiores magnam alias impedit neque
            fug.
          </Text>
        </MotionBox>
        <MotionBox
          display="flex"
          placeContent="center"
          pos="relative"
          zIndex={200}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            width={['clamp(350px, 40vw, 400px)', 'clamp(400px, 40vw, 500px)']}
          >
            <AuthIlustration
              style={{
                height: 'fit-content',
                margin: 0,
                width: '100%'
              }}
            />
          </Box>
        </MotionBox>
        <MotionBox
          initial={{ translateY: '100%', opacity: 0 }}
          animate={{ translateY: '10%', opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          pos="fixed"
          left={0}
          right={0}
          bottom={0}
          zIndex={100}
        >
          <Wave />
        </MotionBox>
      </Container>
    </Box>
  )
}
