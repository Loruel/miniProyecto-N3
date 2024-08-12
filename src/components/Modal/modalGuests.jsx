  import React, { useEffect, useState } from 'react'

  export default function ModalGuests({ sumaGuests }) {
    const [adults, setAdults] = useState(0)
    const [childrens, setChildrens] = useState(0)

    useEffect(() => {
      sumaGuests(adults, childrens)
    }, [adults, childrens, sumaGuests])

    const eventoRestaChildrens = () => {
      setChildrens(cantidad => Math.max(cantidad - 1, 0))
    }

    const eventoSumaChildrens = () => {
      setChildrens(cantidad => cantidad + 1)
    }

    const eventoRestaAdults = () => {
      setAdults(cantidad => Math.max(cantidad - 1, 0))
    }

    const eventoSumaAdults = () => {
      setAdults(cantidad => cantidad + 1)
    }

    return (
      <div className='modalGuests'>

        <div className='adults'>
          <h3>Adults</h3>
          <p>Ages 13 or above</p>
          <div className='sumaAdults'>
            <button className='buttonMenos' onClick={eventoRestaAdults}>-</button>
            <input type="text" className='inputAdults' value={adults} placeholder='0'
              onChange={(e) => setAdults(parseInt(e.target.value) || 0)} readOnly/>
            <button className='buttonMas' onClick={eventoSumaAdults}>+</button>
          </div>
        </div>

        <div className='childrens'>
          <h3>Childrens</h3>
          <p>Ages 2-12</p>
          <div className='sumaChildrens'>
            <button className='buttonMenos' onClick={eventoRestaChildrens}>-</button>
            <input type="text" className='inputChildrens' value={childrens} placeholder='0'
              onChange={(e) => setChildrens(parseInt(e.target.value) || 0)} readOnly/>
            <button className='buttonMas' onClick={eventoSumaChildrens}>+</button>
          </div>
        </div>

      </div>
    )
  }