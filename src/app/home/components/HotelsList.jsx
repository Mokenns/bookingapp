import HotelCard from './HotelCard'

function HotelsList ({ hotels }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7'>
      {hotels.map(h => (
        <HotelCard
          key={h.id}
          id={h.id}
          name={h.name}
          rating={h.rating}
          city={h.city.name}
          country={h.city.country}
          price={h.price}
          image={h.images[0].url}
        />
      ))}
    </div>
  )
}
export default HotelsList