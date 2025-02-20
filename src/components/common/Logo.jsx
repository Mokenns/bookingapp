import { Link } from 'react-router'
import LogoSvg from '../ui/LogoSvg'

function Logo () {
  return (
    <Link to='/' className='flex items-center gap-2'>
      <LogoSvg className='size-8' />
      <h2 className='font-semibold text-blue-500 text-3xl'>
        Booking<span className='text-emerald-500'>App</span>
      </h2>
    </Link>
  )
}
export default Logo