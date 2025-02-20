import { Link } from 'react-router'
import { IoLocationOutline } from 'react-icons/io5'
import { priceFormat } from '../../../utils'
import StarRating from '../../../components/ui/StarRating'

function HotelCard ({ id, name, rating, city, country, price, image }) {
  return (
    <div className='flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
      <img
        className='aspect-[1.4] object-cover overflow-hidden'
        src={image}
        alt={name}
      />
      <div className='p-5 grow'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <div className='mb-1'>
          <StarRating rating={rating} />
        </div>
        <p className='flex items-center gap-1 mb-1'>
          <IoLocationOutline /> <span className='text-sm'>{city}, {country}</span>
        </p>
        <p className='font-semibold'>{priceFormat(price)}</p>
      </div>
      <div className='p-5 bg-gray-50'>
        <Link
          to={`/hotel/${id}`}
          className='btn block text-center text-white bg-blue-500'>
          More Info
        </Link>
      </div>
    </div>
  )
}
export default HotelCard