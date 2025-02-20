import { useRef } from 'react'

function SerachForm ({ setSearch, className }) {
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit} className={'flex items-center w-full border rounded-lg border-neutral-300 p-2 ' + className}>
      <input type="text" ref={inputRef} className='w-full outline-0 px-4' />
      <button className='btn bg-blue-500 text-white'>Search</button>
    </form>
  )
}
export default SerachForm