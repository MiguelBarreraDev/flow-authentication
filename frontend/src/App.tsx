import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './hooks'
import {
  Home,
  NotFound,
  PrivateRoutes,
  Profile,
  PublicRoutes,
  Root
} from './pages'

const App: React.FC = () => {
  const { isLogged } = useAuth()
  return (
    <Routes>
      {isLogged ? (
        <Route path="/" element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<Root />} />
        </Route>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
