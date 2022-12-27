import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components'
import { useAuth, useRecoveryUser } from './hooks'
import { Home, NotFound, Profile, Root } from './pages'

const App: React.FC = () => {
  const { isLogged } = useAuth()
  const { loading } = useRecoveryUser()

  return (
    <>
      {!loading && (
        <ChakraProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              {isLogged ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                </>
              ) : (
                <Route path="/" element={<Root />} />
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      )}
    </>
  )
}

export default App
