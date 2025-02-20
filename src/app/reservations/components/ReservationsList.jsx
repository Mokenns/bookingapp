import ReservationCard from './ReservationCard'

function ReservationsList ({ reservations, onDelete, onCreateReview }) {
  return (
    <div className='py-10 '>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7'>
        {
          reservations.map(reservation => (
            <ReservationCard
              key={reservation.id}
              id={reservation.id}
              checkIn={reservation.checkIn}
              checkOut={reservation.checkOut}
              hotelId={reservation.hotel.id}
              hotelName={reservation.hotel.name}
              hotelPrice={reservation.hotel.price}
              city={reservation.hotel.city.name}
              country={reservation.hotel.city.country}
              onDelete={onDelete}
              onCreateReview={onCreateReview}
            />
          ))
        }
      </div>
      {reservations.length === 0 && (
        <p className='text-center font-semibold'>
          No reservations
        </p>
      )}
    </div>
  )
}
export default ReservationsList