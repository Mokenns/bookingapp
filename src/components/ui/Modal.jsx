import { cn } from '../../utils'

function Modal ({ children, openModal, setOpenModal }) {
  return (
    <div className={cn('fixed top-0 left-0 size-full grid place-content-center z-50 transition-opacity ease-in-out duration-300 opacity-0 invisible', openModal && 'opacity-100 visible')}>
      <div
        className='absolute top-0 left-0 size-full bg-black/60'
        onClick={() => setOpenModal(false)} />
      <div className='relative bg-white p-9 rounded-lg'>
        {children}
      </div>
    </div>
  )
}
export default Modal