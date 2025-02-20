import { Link } from 'react-router'
import LoginForm from './components/LoginForm'

function Login () {
  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>
        Sign in with your account
      </h1>
      <LoginForm />
      <p>
        Do you need an account?{' '}
        <Link to='/register' className='text-blue-500 font-semibold'>
          Creat an account
        </Link>.
      </p>
    </div>
  )
}
export default Login