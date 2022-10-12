import { useEffect,useState } from 'react'
import{pedirDatos} from '../../Datos/PedirDatos'
import {useParams} from'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'

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
             ?<Loader></Loader>
             : <ItemDetail item = {item}/>
        }


            
    </div>
)
}
export default ItemDetailContainer
