import React from 'react'
import { useContext } from 'react';
import { BsFillCartPlusFill } from "react-icons/bs";
import {Link} from 'react-router-dom' 
import { CartContext } from '../../Context/CartContext';

const CartsWidget = () => {
const {cartQuantity}= useContext (CartContext)
  
  
    return (
    <Link to = "/cart">
        <BsFillCartPlusFill/>
        <span>{cartQuantity()}</span>
    </Link>
  )
}

export default CartsWidget