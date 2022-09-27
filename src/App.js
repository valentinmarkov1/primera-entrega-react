import React from 'react'
import Nav from './components/Nav/Nav'
// import Boton from './components/header/CartsWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nosotros } from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider} from './Context/CartContext'

import Cart from './components/Cart/Cart'

const App = () => {




  return (
    <CartProvider>
     
    

      <BrowserRouter>

        <Nav></Nav> 

        <Routes>
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/' element={<ItemListContainer></ItemListContainer>} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/Nosotros' element={<Nosotros></Nosotros>} ></Route>
          <Route path='/Contacto' element={<Contacto></Contacto>}></Route>
          <Route path='/Cart'element={<Cart/>}/>
        </Routes>

        {/* <Boton></Boton> */}


      </BrowserRouter>
  </CartProvider>

  )
}

export default App
