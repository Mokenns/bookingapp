import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

function AuthRoute ({ children }) {
  const { isAuth } = useAuth()
  if (isAuth) return <Navigate to='/' />
  return children ? children : <Outlet />
}
export default AuthRoute