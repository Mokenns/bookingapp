import { useEffect, useState } from 'react'
import { FiFilter } from "react-icons/fi"
import { api } from '../../services/api'
import HotelsList from './components/HotelsList'
import SerachForm from './components/SerachForm'
import FilterForm from './components/FilterForm'
import Menu from '../../components/ui/Menu'

function Home () {
  const [hotels, setHotels] = useState([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    api.get('/hotels')
      .then(res => {
        setHotels(res.data)
      })
  }, [])

  const filtered = hotels.filter(hotel => (
    hotel.name.toLowerCase().includes(search.toLowerCase())
  ))

  const handleChangeFilterByCity = (city) => {
    api.get(`/hotels${city ? `?cityId=${city}` : ''}`)
      .then(res => {
        setHotels(res.data)
      })
  }

  return (
    <div className='max-w-5xl max-[1024px]:px-4 mx-auto'>
      <div className='pt-12 flex items-center justify-center gap-4'>
        <SerachForm setSearch={setSearch} className='w-full sm:w-fit' />
        <button className='min-sm:hidden cursor-pointer' onClick={() => setOpen(true)}>
          <FiFilter className='size-7' />
        </button>
        <Menu open={open} setOpen={setOpen}>
          <FilterForm filterById={handleChangeFilterByCity} className='w-full sm:w-fit' />
        </Menu>
      </div>
      <div className='py-12'>
        <HotelsList hotels={filtered} />
      </div>
    </div>
  )
}
export default Home