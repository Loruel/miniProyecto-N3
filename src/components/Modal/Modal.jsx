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
    setIsOpen3(false)
  }

  const [isOpen3, setIsOpen3] = useState(false)

  const toggleModal3 = () => {
    setIsOpen3(!isOpen3)
    setIsOpen2(false)
  }


  const selectorLocation = (location) => {
    setSearchValues({ ...serchValues, city: location })
    /* setIsOpen2(false) */
  }

  const sumaGuests = (adults, childrens) => {
    setSearchValues({ ...serchValues, maxGuests: adults + childrens})
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

          <div className='optionModal' onClick={toggleModal2}>
            <p>LOCATION</p>
            <input className='selectModal' name="city" type="text" placeholder='Select state' onChange={changeState} value={serchValues.city} readOnly />
          </div>

          <div className='optionModal' onClick={toggleModal3}>
            <p>GUESTS</p>
            <input className='inputModal' name='maxGuests' type="text" placeholder='Add guests' onChange={changeState} value={serchValues.maxGuests} readOnly />
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
              <ModalLocation selectorLocation={selectorLocation} />
            }

          </div>
          <div className='divOptions2'>

            {isOpen3 &&
              <ModalGuests sumaGuests={sumaGuests}/>
            }

          </div>
        </nav>

      </div>
    </div>
  )
}
