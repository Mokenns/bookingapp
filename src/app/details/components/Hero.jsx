import { TbWorld } from "react-icons/tb"

function Hero ({ name, imagesUrl, city, country }) {

  return (
    <div className='bg-blue-100 h-[35dvh] bg-cover bg-center' style={{ backgroundImage: `url("${imagesUrl}")` }}>
      <div className='grid h-full place-content-center text-white text-center bg-black/25 backdrop-blur-[10px]'>
        <h1 className='text-4xl font-semibold mb-2'>{name}</h1>
        <p className='flex items-center justify-center gap-1'>
          <TbWorld /> {city}, {country}
        </p>
      </div>
    </div>
  )
}
export default Hero