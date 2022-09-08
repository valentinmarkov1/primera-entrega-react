import {useEffect,useState } from "react" 
// import {stock} from "../../"
const stock = [
    {
        id: 1,
        nombre: "producto 1",
        precio: "1000",
        img: 'https://via.placeholder.com/250',
        stock: 50,
        desc: 'Gran Producto'

    },
    {
        id: 2,
        nombre: "producto 2",
        precio: "2000",
        img: 'https://via.placeholder.com/250',
        stock: 50,
        desc: 'Gran Producto'

    },
    {
        id: 3,
        nombre: "producto 3",
        precio: "1200",
        img:'https://via.placeholder.com/250',
        stock: 50,
        desc: 'Gran Producto'

    },
    {
        id: 4,
        nombre: "producto 4",
        precio: "800",
        img: 'https://via.placeholder.com/250',
        stock: 50,
        desc: 'Gran Producto'

    },

]


const pedirdatos = () => {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
}


const ItemList = () => {

    const[productos,setProductos] = useState ([])
    console.log(productos)

    useEffect(() => {
        pedirdatos()
            .then((res) => {
            setProductos(res)

            })
        .finally(() => {
                console.log("fin del proceso")

            })

    },[])

    return (
        <div className='container my-5'>
            <h2>Productos </h2>
            <hr />
            {productos.map((prod) => {
                    return<div>
                        { <img src={prod.img}/> }
                        <h4>{prod.nombre}</h4>
                        <p>Precio: {prod.precio}</p>
                        <small>Stock disponible: {prod.stock}</small>
                        <p>{prod.desc}</p>
                        <button>Ver Mas</button>
                    </div>
            
            }) }

        </div>
    )

}
export default ItemList