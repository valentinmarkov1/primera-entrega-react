import React from "react"
import { Link } from "react-router-dom"
// import {useNavigate} from "react-router-dom"
// const history = useNavigate();
const Item = ({producto}) => {
  return (
    <div>
        <img src={producto.img} alt= ""/> 
        <h4>{producto.nombre}</h4>
        <p>Precio: {producto.precio}</p>
        <small>Stock disponible: {producto.stock}</small>
        <p>{producto.desc}</p>
        <Link to= {'/item/'+producto.id}className="btn btn-primary mx-1 my-3">Ver Mas</Link>
        {/* <button className="btn btn-primary my-3" 
          onClick={() => history(`/item/${producto.id}`)}> Ver Mas</button> */}

    </div>
  )
}


export default Item