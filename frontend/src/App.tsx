import { Box, Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Sidebar } from './components'
import { useAuth } from './hooks'
import { Home, NotFound, Profile, Root } from './pages'

const App: React.FC = () => {
  const { isLogged } = useAuth()
  return (
    <Flex>
      {isLogged && <Sidebar />}
      <Box flex={1} w={isLogged ? 'auto' : '100%'}>
        <Header />
        <Routes>
          {isLogged ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
            </>
          ) : (
            <Route path="/" element={<Root />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Flex>
  )
}

export default App
