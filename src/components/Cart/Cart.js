import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {

  const { cart,cartTotal,emptyCart } = useContext(CartContext)


  return (
    <div>
      <h2>
        Tu Carrito
      </h2>
      <hr/>
      
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.nombre}</h3>
          <p> Precio:{item.precio}</p>
          <p> Cantidad: {item.cantidad}</p>
          <p>Color: {item.color}</p>
          <small> Talle: {item.talle}</small>
          <hr/>
        </div>


      ))}

      <h4>Total:${cartTotal()} </h4>
      <button onClick={emptyCart} className="btn btn-danger" >Vaciar Carrito</button>
    </div>

  )



}

export default Cart

  


