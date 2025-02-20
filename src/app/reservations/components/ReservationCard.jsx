import { Link } from 'react-router'
import { IoCalendarClearOutline, IoLocationOutline, IoBedOutline } from 'react-icons/io5'
import { FiDollarSign } from "react-icons/fi"
import { priceFormat } from '../../../utils'

function ReservationCard ({
  id,
  checkIn,
  checkOut,
  hotelId,
  hotelName,
  hotelPrice,
  city,
  country,
  onDelete,
  onCreateReview
}) {
  const checkInDay = new Date(checkIn)
  const checkOutDay = new Date(checkOut)
  // 24h 60m 60s 1000ms
  const msPerDay = 24 * 60 * 60 * 1000 // milliseconds per day
  const days = Math.round((checkOutDay - checkInDay) / msPerDay)
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
      {/* Cabecera */}
      <h2 className='bg-blue-500 text-white text-xl font-semibold p-4'>
        <Link to={`/hotel/${hotelId}`}>
          {hotelName}
        </Link>
      </h2>

      {/* Cuerpo */}
      <div className='flex flex-col gap-4 p-6'>
        {/* Detalles */}
        <div className='flex items-center justify-between'>
          {/* Llegada */}
          <div className='flex items-start gap-2'>
            <IoCalendarClearOutline className='size-8' />
            <span className='font-semibold'>
              Check-in
              <span className='block font-normal text-xs'>{checkIn}</span>
            </span>
          </div>

          {/* Salida */}
          <div className='flex items-start gap-2'>
            <IoCalendarClearOutline className='size-8' />
            <span className='font-semibold'>
              Check-out
              <span className='block font-normal text-xs'>{checkOut}</span>
            </span>
          </div>
        </div>

        {/* location */}
        <div className='flex items-center gap-1'>
          <IoLocationOutline />
          <p>{city}, {country}</p>
        </div>

        {/* nights */}
        <div className='flex items-center gap-1'>
          <IoBedOutline />
          <p>{days} nights</p>
        </div>

        {/* price */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <FiDollarSign />
            <p>Price per night</p>
          </div>
          <p className='font-semibold'>{priceFormat(hotelPrice)}</p>
        </div>

        {/* total */}
        <div className='flex items-center justify-between border-t pt-4 border-neutral-300'>
          <div className='flex items-center gap-1'>
            <FiDollarSign />
            <p className='font-semibold'>Total</p>
          </div>
          <p className='text-xl font-semibold'>{priceFormat(hotelPrice * days)}</p>
        </div>
      </div>

      {/* Actions */}
      <div className='flex justify-between bg-gray-50 py-4 px-6'>
        <button className='btn bg-red-400 text-white hover:bg-red-500'
          onClick={() => onDelete(id)}>
          Delete
        </button>
        <button className='btn bg-yellow-400 text-white hover:bg-yellow-500'
          onClick={() => onCreateReview(hotelId)}>
          Rate
        </button>
      </div>
    </div>
  )
}
export default ReservationCard