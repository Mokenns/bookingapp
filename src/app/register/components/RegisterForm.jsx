import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '../../../utils'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router'

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.enum(['male', 'female', 'other'], { message: 'Please select a valid genre' })
})

function RegisterForm () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const navigate = useNavigate()
  const { register: createUser } = useAuth()

  const onSubmit = (data) => {
    createUser(data)
    navigate('/login')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className='font-semibold'>
          First Name:
          <input
            className={cn('input',
              errors.firstName ? 'border-red-400' : 'focus:border-blue-500'
            )}
            {...register('firstName')}
          />
        </label>
        {errors.firstName && <p className='text-sm text-red-400'>{errors.firstName.message}</p>}
      </div>
      <div className="mb-4">
        <label className='font-semibold'>
          Last Name:
          <input
            className={cn('input',
              errors.lastName ? 'border-red-400' : 'focus:border-blue-500'
            )}
            {...register('lastName')}
          />
        </label>
        {errors.lastName && <p className='text-sm text-red-400'>{errors.lastName.message}</p>}
      </div>
      <div className="mb-4">
        <label className='font-semibold'>
          Email:
          <input
            type="email"
            className={cn('input',
              errors.email ? 'border-red-400' : 'focus:border-blue-500'
            )}
            {...register('email')}
          />
        </label>
        {errors.email && <p className='text-sm text-red-400'>{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className='font-semibold'>
          Password:
          <input
            type="password"
            className={cn('input',
              errors.password ? 'border-red-400' : 'focus:border-blue-500'
            )}
            {...register('password')}
          />
        </label>
        {errors.password && <p className='text-sm text-red-400'>{errors.password.message}</p>}
      </div>
      <div className="mb-4">
        <label>
          <span className='font-semibold'>Gender:</span>
          <select
            className={cn('input',
              errors.gender ? 'border-red-400' : 'focus:border-blue-500'
            )}
            {...register('gender')}
          >
            <option value="">Select a genre</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </label>
        {errors.gender && <p className='text-sm text-red-400'>{errors.gender.message}</p>}
      </div>
      <button className='btn bg-blue-500 text-white mb-4'>
        Register
      </button>
    </form>
  )
}
export default RegisterForm