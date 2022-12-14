import { useEffect, useState } from "react"
import { pedirDatos } from '../../Datos/PedirDatos'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
 import Loader from "../Loader/Loader"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    

    
    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                }
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <Loader/>
                    : <ItemList productos={productos} />

            }
        </div>
    )

}
export default ItemListContainer
