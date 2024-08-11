import React, { useEffect, useState } from 'react'
import ModalLocation from './ModalLocation'
import ModalGuests from './modalGuests'

export default function Modal({ toggleModal, data, setStays, }) {
  const [cities, setCities] = useState([])
  const [serchValues, setSearchValues] = useState({
    city: '',
    maxGuests: ''
  })

  //son los 3 tipos de filtro que necesito
  function filterData() {

    const { city, maxGuests } = serchValues

    if (city.trim() !== '' && maxGuests === '') {

      const rs = data.filter(place => place.city.toLowerCase().includes(city.toLocaleLowerCase()))

      setStays(rs)
      return

    }

    if (maxGuests !== '' && city.trim() === '') {

      const rs = data.filter(place => place.maxGuests >= parseInt(maxGuests))

      setStays(rs)
      return

    }

    if (city.trim() !== '' && maxGuests !== '') {

      const rs = data.filter(place => place.city.toLowerCase().includes(city.toLocaleLowerCase()) && place.maxGuests >= parseInt(maxGuests))

      setStays(rs)
      return

    }
  }

  //no entiendo bien


  const changeState = (e) => {
    const target = e.target
    setSearchValues({ ...serchValues, [target.name]: target.value })

    setCities(
      getCities().filter(city => city.toLowerCase().includes(target.value.toLocaleLowerCase()))
    )
  }

  const getCities = () => {
    const rs = []

    data.forEach(place => {
      if (!rs.includes(place.city)) {
        rs.push(place.city)
      }
    })
    return rs
  }

  useEffect(() => {
    const rs = getCities()
    setCities(rs)
  }, [])



  const [isOpen2, setIsOpen2] = useState(false)

  const toggleModal2 = () => {
    setIsOpen2(!isOpen2)
  }

  const [isOpen3, setIsOpen3] = useState(false)

  const toggleModal3 = () => {
    setIsOpen3(!isOpen3)
  }

  //visual

  return (
    <div className='modal'>
      <div className='divModal'>

        <div className='optionClose'>
          <button className='closeModalButton' onClick={toggleModal}>
            X
          </button>
        </div>

        <nav className='navSelect'>

          <div className='optionModal'>
            <p>LOCATION</p>
            <select className='selectModal' name="city" onChange={changeState} value={serchValues.city} onClick={toggleModal2}>
              <option value="">Select state</option>
              <option value="Helsinki">Helsinki, Finland</option>
              <option value="Turku">Turku, Finland</option>
              <option value="Vaasa">Vaasa, Finland</option>
              <option value="Oulu">Oulu, Finland</option>
            </select>
          </div>

          <div className='optionModal' onClick={toggleModal3}>
            <p>GUESTS</p>
            <input className='inputModal' name='maxGuests' type="text" placeholder='Add guests' onChange={changeState} value={serchValues.maxGuests} />
          </div>

          <div className='optButtonModal'>
            <button className='buttonModal' onClick={() => { filterData(), toggleModal() }}>
              <img src="../public/searchwhite.svg" alt="" />
              <p>Search</p>
            </button>
          </div>

        </nav>

        <nav className='navOptions'>
        <div className='divOptions'>

          {isOpen2 &&
          <ModalLocation />
          }
  
        </div>
        <div className='divOptions2'>

        {isOpen3 &&
          <ModalGuests />
          }

        </div>
        </nav>

      </div>
    </div>
  )
}
