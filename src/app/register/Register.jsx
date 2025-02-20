import { Link } from 'react-router'
import RegisterForm from './components/RegisterForm'

function Register () {
  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>
        Create an account
      </h1>
      <RegisterForm />
      <p>
        Do you already have an account?{' '}
        <Link to='/login' className='text-blue-500 font-semibold'>
          Sign in!
        </Link>.
      </p>
    </div>
  )
}
export default Register