import React from 'react'
import './ItemListContainer.css'


import img from '../NavBar/descarga.png'

const ItemListContainer = (props) => {
  return (
    <div className='greeting'>
        <h1>{props.greeting}</h1>
        <img className='carro' src={img}/>
    </div>
  )
}

export default ItemListContainer