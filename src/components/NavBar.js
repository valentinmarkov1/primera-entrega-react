import React from 'react' 
import Styled from 'styled-components'


const NavContainer = Styled.nav` 
    h2{
        color:white;
        font-weigth: 400;
        height:50px
    }

    padding: 50;
    background-color: black;
    display: flex;
    alignitems: 'center',
    
    a {
        color:white;
        margin-right: 1rem;
        text-decoration:none;
    }
    
    
    
    ` 
function Navbar () {
    return (
        <>  
        <NavContainer>
            <h2>Navbar</h2>
            
            <div>
                <a href="http://www.google.com">inicio</a>
                <a href="http://www.google.com">Menu</a>
                <a href="http://www.google.com">Nosotros</a>
                <a href="http://www.google.com">Contacto</a>

            </div>
            
        </NavContainer>

        </>
    )
} 

 
export default Navbar

