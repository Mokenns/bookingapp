import { Outlet } from 'react-router'
import Logo from '../components/common/Logo'

function AuthLayout () {
  return (
    <div className='grid place-content-center min-h-dvh py-12'>
      <div className='mb-6'>
        <Logo />
      </div>
      <Outlet />
    </div>
  )
}
export default AuthLayout