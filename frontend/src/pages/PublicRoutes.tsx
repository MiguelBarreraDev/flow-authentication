import { Outlet } from 'react-router-dom'
import { Header } from '~/components'

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
