function Map ({ lat, lon, zoom = 15 }) {
  return (
    <div className='aspect-square rounded-lg overflow-hidden'>
      <iframe
        src={`https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
        allowFullScreen=""
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className='size-full'
      ></iframe>
    </div>
  )
}
export default Map