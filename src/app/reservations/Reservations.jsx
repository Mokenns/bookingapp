import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import ReservationsList from './components/ReservationsList'
import Reviews from './components/Reviews'
import Modal from '../../components/ui/Modal'

function Reservations () {
  const [reservations, setReservations] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [hotelId, setHotelId] = useState(null)

  useEffect(() => {
    api.get('/bookings')
      .then(res => {
        setReservations(res.data)
      })
  }, [])

  const handleReservationDelete = (id) => {
    api.delete(`/bookings/${id}`)
      .then(() => {
        setReservations(reservations.filter(r => r.id !== id))
      })
  }

  const handleReviewCreate = (id) => {
    console.log(id)
    setOpenModal(true)
    setHotelId(id)
  }

  return (
    <div className='max-w-5xl max-[1024px]:px-4 mx-auto'>
      <ReservationsList
        reservations={reservations}
        onDelete={handleReservationDelete}
        onCreateReview={handleReviewCreate}
      />

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <Reviews hotelId={hotelId} />
      </Modal>
    </div>
  )
}
export default Reservations