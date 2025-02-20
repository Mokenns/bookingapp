import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'
import { cn } from '../../../utils'
import { useAuth } from '../../../hooks/useAuth'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

function LoginForm () {
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    login(data)
    toast.success("Login successful")
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className='font-semibold'>
          Email:
          <input
            type="text"
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
      <button className='btn bg-blue-500 text-white mb-4'>
        Sign in
      </button>
    </form>
  )
}
export default LoginForm