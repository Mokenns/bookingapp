function Gallery ({ images }) {
  return (
    <div className='aspect-square grid grid-cols-4 grid-rows-2 gap-4'>
      <img className='size-full object-cover rounded-lg col-span-full' src={images[0].url} alt="image" />
      <img className='size-full object-cover rounded-lg row-start-2 col-span-2' src={images[1].url} alt="image" />
      <img className='size-full object-cover rounded-lg row-start-2 col-span-2' src={images[2].url} alt="image" />
    </div>
  )
}
export default Gallery