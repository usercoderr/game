import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'

import './header.css'
export const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
            <Link to='/' className='header_store_title'> 
            Game Store
            </Link>
        </div>
        <div className="header-cart-btn_wrapper wrapper">
            <CartBlock/>
        </div>
    </div>
  )
}
