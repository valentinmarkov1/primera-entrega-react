// import React, { useState } from 'react'

const Contador = ({max,counter,setCounter, handleAgregar}) => {

   

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)

        }

    }
  

    const handleSumar = () => {
        if (counter < max){ 

            setCounter(counter + 1)
        }
    }
    //     if (counter < 10){

    //         setCounter(counter + 1)
    //     }
    // }
        

    return (
        <div className='ContenedorContador'>
           <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            
            <hr/>
            <button onClick={handleAgregar} className='btn btn-success'>
                Agregar al Carrito
            </button>
        </div>


    )
}

export default Contador