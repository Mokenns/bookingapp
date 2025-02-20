import { useState, useEffect, useRef } from 'react'
import { api } from '../../../services/api'

function FilterForm ({ filterById, className }) {
  const selectRef = useRef()
  const [cities, setCities] = useState([])

  useEffect(() => {
    api.get('/cities')
      .then(res => setCities(res.data))
  }, [])

  return (
    <div className={'border rounded-lg border-neutral-300 p-2 ' + className}>
      <select
        ref={selectRef}
        className='input border-0'
        onChange={() => filterById(selectRef.current.value)}
      >
        <option value="">All cities</option>
        {cities.map(city => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FilterForm