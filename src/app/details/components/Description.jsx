import { IoLocationOutline } from 'react-icons/io5'
import StarRating from '../../../components/ui/StarRating'

function Description ({ rating, address, description, className }) {
  return (
    <div className={className}>
      <StarRating rating={rating} />
      <p className='flex items-center gap-1 text-sm mb-4'>
        <IoLocationOutline /> {address}
      </p>
      <p>{description}</p>
    </div>
  )
}
export default Description