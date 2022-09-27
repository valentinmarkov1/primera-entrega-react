import Contador from "../Contador/Contador"
import Select from "../Talles/Select"
import React, { useState,useContext } from "react"
import {CartContext} from "../../Context/CartContext"
import { Link } from "react-router-dom"


// const options= [{
//     value: 'L',
//     text: 'Large'
// },

// {
//     value: 'M',
//     text: 'Medium'
// },
// {
//     value: 'S',
//     text: 'Small'
// }
// ]



const ItemDetail = ({ item }) => {

    const {cart,addToCart,isInCart} = useContext (CartContext)
    console.log (cart)
    
    
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle]=useState (item.options[0].value)
    const [color, setColor]=useState (item.options[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            talle,
            color,
            cantidad
        }
        //No funciona el Slice(no reconoce que este definido)
            // const newCart = cart.slice()
            // newCart.push(itemToCart) 
           
            addToCart(itemToCart)
    }

    return (
        <div className="container my-5">
            <img src={item.img} alt=""></img>  
            <h3>{item.nombre}</h3>
            <h4> Precio: {item.precio}</h4>
            <p>{item.desc}</p>
            <p> {item.category}</p>
            <p>Stock: {item.stock}</p>
            {/* <button className="btn btn-primary mx-2">Ver Mas</button> */}
            {/* <hr/> */}
            <Select options={item.options} onSelect={setTalle}  /> 
            <Select options={item.color} onSelect={setColor}  /> 
            <hr/>
            {
                isInCart (item.id)
                ?  <Link to= {"/Cart"} className="btn btn-success my-0 mx-0">Terminar mi Compra</Link>
                :  <Contador 
                max={item.stock} counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar} 
                />
              
            }
        </div>
    )


} 

export default ItemDetail