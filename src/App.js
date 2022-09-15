import React from 'react'
import Nav from './components/Nav/Nav'
// import Boton from './components/header/CartsWidget'
// import Contador from './components/Contador/Contador'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { Nosotros } from './components/Nosotros/Nosotros'
// import Contacto from './components/Contacto/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {

  return (


    <BrowserRouter>

      <Nav></Nav>

      <Routes>
        <Route path='/productos/:categoryId'element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer></ItemListContainer>} />
        <Route path='*' element ={<Navigate to = "/"/>} />
        <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
        {/* <Route path='/Nosotros' element={<Nosotros></Nosotros>} ></Route>
        <Route path='/Contacto' element={<Contacto></Contacto>}></Route> */}
      </Routes>
      {/* <Boton></Boton> */}
      {/* <Contador></Contador> */}





    </BrowserRouter>


  )
}

export default App
