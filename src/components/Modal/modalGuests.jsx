import React, { useState } from 'react'

export default function ModalGuests() {
/* cons [adults, setAdults] = useState('')
cons [childrens, setChildrens] = useState('')
 */



  return (
    <div className='modalGuests'>

      <div className='adults'>
        <h3>Adults</h3>
        <p>Ages 13 or above</p>
        <input type="text" className='inputAdults' placeholder='0'/>
      </div>

      <div className='childrens'>
        <h3>Childrens</h3>
        <p>Ages 2-12</p>
        <input type="text" className='inputChildrens' placeholder='0'/>
      </div>

    </div>
  )
}