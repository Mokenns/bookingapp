import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import HotelsList from './HotelsList'

function RelatedHotels ({ hotelId, cityId }) {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    api.get('/hotels?cityId=' + cityId)
      .then(res => setHotels(res.data))
  }, [cityId])

  const filteredHotels = hotels.filter(h => h.id !== hotelId)

  return (
    <>
      <HotelsList hotels={filteredHotels} />
    </>
  )
}
export default RelatedHotels