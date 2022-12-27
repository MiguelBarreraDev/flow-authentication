import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components'
import { useAuth } from './hooks'
import { Home, NotFound, Profile, Root } from './pages'

const App: React.FC = () => {
  const { isLogged } = useAuth()
  return (
    <>
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
    </>
  )
}

export default App
