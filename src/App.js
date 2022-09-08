import React from 'react'
import Nav from './components/Nav/Nav'
import Boton from './components/header/CartsWidget'
import Contador from './components/Contador/Contador'
import ItemList from './components/ItemListContainer/ItemList'
 
 const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Boton></Boton>
      <Contador></Contador>
      <ItemList></ItemList> 
    </div>
  )
}

export default App
