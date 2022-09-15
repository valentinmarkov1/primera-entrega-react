
 const itemDetail = ({item}) => {
    <div className= "container">
        <img src={item.img}></img>
        <h3>{item.nombre}</h3>
        <p>{item.desc}</p>
        <h4>{item.precio}</h4>
        
    </div>

}

export default itemDetail