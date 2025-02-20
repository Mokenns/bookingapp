import { cn } from '../../utils'
import { IoCloseSharp } from "react-icons/io5"

function Menu ({ children, open, setOpen }) {

  return (
    <div className={cn('menu -top-[200%]', open && 'top-0')}>
      <button
        onClick={() => setOpen(false)}
        className='min-sm:hidden absolute right-4 top-2 cursor-pointer'
      >
        <IoCloseSharp className='size-7' />
      </button>
      <div className='w-full px-5 py-10'>
        {children}
      </div>
    </div>
  )
}
export default Menu