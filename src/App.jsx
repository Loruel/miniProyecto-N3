import React, { useEffect, useState } from 'react'
import Nav from './components/Nav/Nav'
import States from './components/States/States'
import Pie from './components/Pie'
import HeaderState from './components/HeaderState'
import Modal from './components/Modal/Modal'


export default function App() {
//esta es para el filtro
    const [data, setData] = useState([])

//estraer los datos de la 'API'
    const [stays, setStays] = useState([])

    async function getData() {
        const rs = await fetch('states.json')
        const rsJson = await rs.json()
        setStays(rsJson)
        setData(rsJson)
    }

    useEffect(() => {
        getData()
    }, [])
//hasta aca se extraen


//ocultar el modal
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }


//visual
    return (
        <>
            <Nav toggleModal={toggleModal}/>
            {isOpen &&
                <Modal toggleModal={toggleModal} data={data} setStays={setStays}/>}



            <HeaderState stays={stays}/>
            {<States stays={stays}/>}
            <Pie />
        </>
    )
}
