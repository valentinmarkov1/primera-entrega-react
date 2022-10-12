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
           <button onClick={handleRestar} className={counter === 0 ? "btn btn-outline-danger" : "btn btn-outline-primary"}
           disabled = {counter === 0}>-</button>
            
            <span className="mx-2">{counter}</span>
           
          
            <button onClick={handleSumar} className={counter === max ? "btn btn-danger" : "btn btn-primary"}
             disabled = {counter === max }>+</button>
            
            <hr/>
            <button onClick={handleAgregar} className= {'btn btn-success'}
            disabled= {counter === 0}>
                Agregar al Carrito
            </button>
        </div>


)
}
export default Contador
