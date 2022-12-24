import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { useUser } from './hooks/useUser'
import { Home, NotFound, Profile, Root } from './pages'

const App: React.FC = () => {
  const { userState } = useUser()
  useEffect(() => {
    console.log({ userState })
  }, [userState])
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
