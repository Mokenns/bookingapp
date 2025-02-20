import StarRating from '../../../components/ui/StarRating'

function ReviewCard ({ review }) {
  return (
    <div className='border-b border-neutral-300 py-4'>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold capitalize'>
          {review.user.firstName} {review.user.lastName}
        </h2>
        <StarRating rating={review.rating} />
      </div>
      <p className='text-sm pt-1.5'>{review.comment}</p>
    </div>
  )
}
export default ReviewCard