import React from 'react'

export default function ModalLocation({ selectorLocation }) {
  return (
    <div className='modalLocaion'>
      <ul>

        {locations.map((data, i) => (
          <li key={i} onClick={() => selectorLocation(data.value)}>
            <img src="../public/location.svg" alt="" /> {data.text}
          </li>)
        )}

      </ul>
    </div>
  )
}


const locations = [
  { value: "Helsinki", text: "Helsinki, Finland" },
  { value: "Turku", text: "Turku, Finland" },
  { value: "Vaasa", text: "Vaasa, Finland" },
  { value: "Oulu", text: "Oulu, Finland" }]
