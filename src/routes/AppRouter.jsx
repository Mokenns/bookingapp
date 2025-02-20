import { Route, Routes } from 'react-router'
import Home from '../app/home/Home'
import Details from '../app/details/Details'
import Reservations from '../app/reservations/Reservations'
import Login from '../app/login/Login'
import Register from '../app/register/Register'
import NotFound from '../app/not-found/NotFound'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'

function AppRouter () {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='hotel/:id' element={<Details />} />
        <Route path='reservations' element={
          <ProtectedRoute>
            <Reservations />
          </ProtectedRoute>
        } />
      </Route>
      <Route element={
        <AuthRoute>
          <AuthLayout />
        </AuthRoute>
      }>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default AppRouter