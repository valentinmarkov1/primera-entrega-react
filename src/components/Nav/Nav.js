import './Nav.css'; 
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartsWidget'
const nav = () => {

  return (

    <div className="contenedornav">
      <>
        <Link to="/"><h1>Navegador de la ap</h1></Link>

        <div className='contenedorlinks'>

          <nav>
            <Link to="/productos/remeras">Remeras</Link>
            <Link to="/productos/zapatillas">Zapatillas</Link>
            <Link to="/productos/gorros">Gorros</Link>
            <Link to="/Nosotros/">Nosotros</Link>
            <Link to="/Contacto/">Contacto</Link>
            <CartWidget/>
          </nav>
        </div>
      </>

    </div>

  );

}
export default nav;
