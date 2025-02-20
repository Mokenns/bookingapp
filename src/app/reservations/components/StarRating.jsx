import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { cn } from '../../../utils'

function StarRating ({ setRating, rating }) {
  const [hover, setHover] = useState(0)

  return (
    <div className='mb-2'>
      {[...Array(5)].map((_, i) => {
        const value = i + 1
        return (
          <button
            key={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar
              className={cn('text-3xl',
                value <= (hover || rating) ? 'text-yellow-500' : 'text-neutral-300'
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
export default StarRating