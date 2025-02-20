import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import ReviewsList from './ReviewsList'

function Reviews ({ hotelId }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    api.get(`/reviews?hotelId=${hotelId}`)
      .then(({ data }) => setReviews(data.results))
  }, [hotelId])

  return (
    <>
      <h3 className='text-2xl font-semibold text-center mb-4'>
        Reviews
      </h3>

      <ReviewsList
        reviews={reviews}
      />
    </>
  )
}
export default Reviews