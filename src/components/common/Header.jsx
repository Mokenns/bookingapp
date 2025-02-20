import { useState } from 'react'
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi"
import { useAuth } from '../../hooks/useAuth'
import Logo from './Logo'
import Menu from '../ui/Menu'

function Header () {
  const [open, setOpen] = useState(false)
  const { isAuth, logout } = useAuth()

  return (
    <div className='sticky top-0 w-full bg-white shadow-lg z-10'>
      <div className='max-w-5xl max-[1024px]:px-4 mx-auto flex items-center justify-between h-20'>
        <Logo />

        <Menu open={open} setOpen={setOpen}>
          <nav className='flex flex-col sm:flex-row items-center gap-4'>
            {isAuth ? (<>
              <Link to='/reservations' className='text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out'>
                Reservations
              </Link>
              <button
                className='btn bg-red-400 text-white hover:bg-red-500 transition-colors duration-300 ease-in-out'
                onClick={() => logout()}>
                Logout
              </button>
            </>) : (<>
              <Link to='/login' className='text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out'>
                Login
              </Link>
              <Link to='/register' className='text-lg hover:text-blue-500 transition-colors duration-300 ease-in-out'>
                Register
              </Link>
            </>)}
          </nav>
        </Menu>

        <button
          className='min-sm:hidden cursor-pointer'
          onClick={() => setOpen(true)}
        >
          <GiHamburgerMenu className='size-7' />
        </button>
      </div>
    </div>
  )
}
export default Header