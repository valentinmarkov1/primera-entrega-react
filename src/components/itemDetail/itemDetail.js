    const ItemDetail = ({item}) => {
    
    return(
        <div className= "container my-5">
            <img src={item.img}></img>
            <h3>{item.nombre}</h3>
            <h4> Precio: {item.precio}</h4>
            <h4>{item.desc}</h4>
            <p> {item.category}</p>
            <p>Stock: {item.stock}</p>
            <small className="btn btn-primary my-1">Ver Mas</small>
        </div>
        )


}
export default ItemDetail