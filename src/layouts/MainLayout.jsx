import { Outlet } from 'react-router'
import Header from '../components/common/Header'

function MainLayout () {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default MainLayout