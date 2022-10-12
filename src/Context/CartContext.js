import { createContext} from "react";
import {useState} from 'react';
import Swal from 'sweetalert2'

export const CartContext= createContext ()

export const CartProvider = ({children}) => {
    const [cart,setCart]= useState ([])

const addToCart = (item) => {
  setCart([...cart,item])
}

const removeItem = (id) => {
  setCart (cart.filter ((item) => item.id !== id) )  
}
 
const isInCart = (id) => {
      return cart.some((item)=> item.id === id) 
}

const cartQuantity = () => {
        return  cart.reduce (( acc,item) => acc + item.cantidad,0 ) 
    //    return cart?.map (acc => item.cantidad, 0), reduce((acc,item => acc + item.cantidad)) 
}

const cartTotal = () => {
    return cart.reduce(( acc,item) => acc + item.cantidad * item.precio, 0)

    
} 

const emptyCart = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your cart has been deleted.',
            'success',
            setCart([])
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   
}

    return (
        <CartContext.Provider value = {{
            cart, 
            addToCart,
            isInCart, 
            cartQuantity, 
            cartTotal,
            emptyCart,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}