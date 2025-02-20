import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function StarRating ({ rating }) {
  const renderStar = (index) => {
    if (index < Math.floor(rating)) {
      return <FaStar />
    } else if (index < rating) {
      return <FaStarHalfAlt />
    } else {
      return <FaRegStar />
    }
  }
  return (
    <div className='flex items-center gap-1'>
      <span className='flex items-center'>
        {[...Array(5)].map((_, i) => (
          <span key={i + 1} className='text-lg text-amber-300'>{renderStar(i)}</span>
        ))}
      </span>
      <span className='text-sm'>
        {Number.isInteger(rating) ? rating.toFixed(1) : rating}
      </span>
    </div>
  )
}
export default StarRating