import React from 'react'


export default function NavFilter({ toggleModal }) {
  return (
    <ul className='navFilter'>
      <li>
        <input className='searchState' type="search" placeholder='Select state' readOnly onClick={toggleModal} />
        <input className='searchPeople' type="search" placeholder='Add  guests' readOnly onClick={toggleModal} />
        <button className='searchButton' onClick={toggleModal}>
          <img src="../public/search.svg" alt="" />
        </button>
      </li>
    </ul>
  )
}

