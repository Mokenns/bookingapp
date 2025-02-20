import { useState } from 'react'
import StarRating from './StarRating'
import { api } from '../../../services/api'

function Reviews ({ hotelId }) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = () => {
    api.post('/reviews', {
      rating,
      comment,
      hotelId
    })
    setComment('')
    setRating(0)
  }

  return (
    <div className='w-80'>
      <h2 className='font-semibold text-2xl mb-4'>
        Review
      </h2>

      <StarRating setRating={setRating} rating={rating} />

      <textarea
        className='input resize-none border-neutral-300 h-24 mb-4'
        placeholder='Write your review here...'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button
        className='btn bg-blue-500 text-white'
        onClick={handleSubmit}>
        Create an review
      </button>
    </div>
  )
}
export default Reviews