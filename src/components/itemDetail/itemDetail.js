import Contador from "../Contador/Contador"
import Select from "../Talles/Select"
import {useState} from "react"

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

        console.log (itemToCart)
        // console.log({
        //     ...item,
        //     cantidad
        // })

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
            <hr/>
            <Select options={item.options} onSelect={setTalle}  /> 
            <Select options={item.color} onSelect={setColor}  /> 
            <Contador max={item.stock} counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar} />
        </div>
    )


}
export default ItemDetail