import React from 'react'
import NavFilter from './NavFilter'

export default function Nav({toggleModal}) {
  return (
    <nav className='header'>
      <figure>
        <img src="./public/logo.png" alt="" />
      </figure>

      <NavFilter toggleModal={toggleModal}/>
    </nav>
  )
}
