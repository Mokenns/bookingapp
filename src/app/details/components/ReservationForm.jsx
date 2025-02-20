import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { cn } from '../../../utils'
import { api } from '../../../services/api'

const schema = z.object({
  checkIn: z.string().min(1, 'Check-In is required'),
  checkOut: z.string().min(1, 'Check-Out is required')
})

function ReservationForm ({ hotelId }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    data.hotelId = hotelId
    api.post('/bookings', data)
    toast.success("Reservation completed successfully")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 justify-center items-center'>
      <div className='flex justify-center gap-4'>
        <div className="flex flex-col items-center">
          <label className='text-center font-semibold'>
            Check-In
            <input
              type="date"
              className={cn('input font-normal',
                errors.checkIn ? 'border-red-400' : 'focus:border-blue-500'
              )}
              {...register('checkIn')}
            />
          </label>
          {errors.checkIn && <p className='text-sm text-red-400'>{errors.checkIn.message}</p>}
        </div>
        <div className="flex flex-col items-center">
          <label className='text-center font-semibold'>
            Check-Out
            <input
              type="date"
              className={cn('input font-normal',
                errors.checkOut ? 'border-red-400' : 'focus:border-blue-500'
              )}
              {...register('checkOut')}
            />
          </label>
          {errors.checkOut && <p className='text-sm text-red-400'>{errors.checkOut.message}</p>}
        </div>
      </div>
      <button className='btn bg-green-500 text-white mb-4'>
        Reserve
      </button>
    </form>
  )
}
export default ReservationForm