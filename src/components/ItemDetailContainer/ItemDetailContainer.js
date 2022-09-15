import { useEffect,useState } from 'react'
import{pedirDatos} from '../../Datos/PedirDatos'
import {useParams} from'react-router-dom'

export const ItemDetailContainer = () => {
    
    
    const [item, setItem] = useState (null)
    const {itemId} = useParams ()
    const [loading,setLoading] = useState (true)
    
    console.log(itemId)  
    console.log(item)

    useEffect (() =>{
        pedirDatos()
        .then((res) =>{
            setItem(res.find((prod) => prod.id === Number (itemId)))
        })
        .finally(() => {
            setLoading(false)
        })

  }, [])
    
return(
    <div>
        {
            
            loading
             ?<h2>Cargando...</h2>
             : <itemDetail item={item}/>
        }


            
    </div>
)
}
export default ItemDetailContainer
