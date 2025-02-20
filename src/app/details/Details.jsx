import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaLock } from "react-icons/fa"
import { api } from '../../services/api'
import { useAuth } from '../../hooks/useAuth'
import Hero from './components/Hero'
import Description from './components/Description'
import Gallery from './components/Gallery'
import Map from './components/Map'
import Spinner from '../../components/ui/Spinner'
import ReservationForm from './components/ReservationForm'
import Reviews from './components/Reviews'
import RelatedHotels from './components/RelatedHotels'

function Details () {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)
  const { isAuth } = useAuth()

  useEffect(() => {
    api.get('/hotels/' + id)
      .then(res => setHotel(res.data))
  }, [id])

  if (!hotel) return (
    <div className='grid min-h-dvh place-content-center'>
      <Spinner className='size-24 text-gray-200 fill-blue-500 animate-spin' />
    </div>
  )

  return (
    <div>
      <Hero
        name={hotel.name}
        imagesUrl={hotel.images[0].url}
        city={hotel.city?.name}
        country={hotel.city?.country}
      />

      <div className='max-w-5xl max-[1024px]:px-4 mx-auto pb-10'>
        <div className='py-10'>
          {isAuth ? (
            <ReservationForm hotelId={hotel.id} />
          ) : (
            <p className='flex items-center justify-center gap-2'>
              <FaLock />
              <span className='text-sm'>You need to be logged in to make a reservation.</span>
            </p>
          )}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <Description
            className={'sm:col-span-2'}
            rating={hotel.rating}
            address={hotel.address}
            description={hotel.description}
          />
          <Gallery images={hotel.images} />
          <Map
            lat={hotel.lat}
            lon={hotel.lon}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='order-2 sm:order-1'>
            <Reviews hotelId={hotel.id} />
          </div>
          <div className='h-full oreder-1 sm:order-2'>
            <div className='sticky top-20'>
              <RelatedHotels
                hotelId={hotel.id}
                cityId={hotel.cityId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Details