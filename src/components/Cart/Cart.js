import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { BsTrash } from 'react-icons/bs'
import { Link } from "react-router-dom"
const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)


  return (
    <div>
      {
        cart.length === 0
          ? <>
            <h2>Tu carrito esta vacio </h2>
            <hr></hr>
            <Link to="/" className="btn btn-primary mx-0" >Ir a comprar</Link>
          </>

          : <>
            <h2>
              Tu Carrito
            </h2>
            <hr />

            {cart.map((item) => (
              <div key={item.id}>
                <h3>{item.nombre}</h3>
                <p> Precio:{item.precio}</p>
                <p> Cantidad: {item.cantidad}</p>
                <p>Color: {item.color}</p>
                <small> Talle: {item.talle}</small>
                <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-3"><BsTrash /></button>
                <hr />
              </div>


            ))}

            <h4>Total:${cartTotal()} </h4>
            <button onClick={emptyCart} className="btn btn-danger" >Vaciar Carrito</button>

          </>
      }

    </div>

  )



}

export default Cart




