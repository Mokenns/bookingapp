import { useState } from 'react'
import ReviewCard from './ReviewCard'

function ReviewsList ({ reviews }) {
  const [visibleItem, setVisibleItem] = useState(5)
  const increment = 5

  const loadMore = () => {
    setVisibleItem(visibleItem + increment)
  }

  const itemsRendered = reviews.slice(0, visibleItem)

  return (
    <>
      {itemsRendered.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}

      {visibleItem < reviews.length && (
        <button
          className='btn bg-blue-500 text-white mt-4 block mx-auto'
          onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  )
}
export default ReviewsList