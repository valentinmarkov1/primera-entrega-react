import { useEffect,useState } from 'react'
import{pedirDatos} from '../../Datos/PedirDatos'
import {useParams} from'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    
    
    const [item, setItem] = useState (null)
    const {itemId} = useParams ()
    const [loading,setLoading] = useState (true)
    
        useEffect (() =>{
        pedirDatos()
        .then((res) =>{
            setItem(res.find((prod) => prod.id === Number (itemId)))
        })
        .finally(() => {
            setLoading(false)
        })

  }, [itemId])
    
return(
    <div>
        {
            
            loading
             ?<h2>Cargando...</h2>
             : <ItemDetail item = {item}/>
        }


            
    </div>
)
}
export default ItemDetailContainer
