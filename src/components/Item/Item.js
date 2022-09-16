import { Link } from "react-router-dom"

export const item = ({producto}) => {
  return (
    <div>
        <img src={producto.img}/> 
        <h4>{producto.nombre}</h4>
        <p>Precio: {producto.precio}</p>
        <small>Stock disponible: {producto.stock}</small>
        <p>{producto.desc}</p>
        <Link to= "/item/${Producto.id}"className="btn btn-primary my-2">Ver Mas</Link>
    </div>
  )
}


export default itemcsc