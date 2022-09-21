import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './cart-block.css'

export  const CartBlock = () => {
  return (
    <div className="cart-block">
        <AiOutlineShoppingCart className='cart-block_icon' size={30} />
        <span className='cart-block_total_price'>
          4 000 som
        </span>
    </div>
  )
}
