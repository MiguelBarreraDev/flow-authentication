import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link to="/Home" />
    </div>
  )
}
