import React, { useState } from 'react'

const Contador = () => {

    const [counter, setCounter] = useState(0)


    const sumar = () => {
        setCounter (counter + 1)
        console.log(counter)
    }
        const restar = () => {
        setCounter (counter - 1)
        console.log(counter)
    }


    return (
        <div className='ContenedorContador'>
            <h2>Nuestro Stock</h2>
            <hr></hr>
            <button onClick={restar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={sumar} className="btn btn-outline-primary">+</button>
        </div>


    )
}

export default Contador