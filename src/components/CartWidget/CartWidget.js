import React from 'react'
import './CartWidget.css'

const CartWidget = (props) => {
  return (
    <div>
        <i class=" cart bi bi-cart">{props.cantidad}</i>
    </div>
  )
}

export default CartWidget