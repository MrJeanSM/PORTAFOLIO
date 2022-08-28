import React from 'react'
import logotipo from '../../img/upn.png'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
    Nav, 
    NavContenedor,
    Icon,
    NavMenu,
    NavItems,
    NavLink,
    Imagen
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <div>
        <Nav>
            <NavContenedor>
                <Imagen src={logotipo} to='/'></Imagen>
                {/* <img src={logotipo} className='logotipo' alt=''></img> */}
                <Icon onClick={toggle} >
                    <FaBars />
                </Icon>
                <NavMenu>
                    <NavItems>
                        <NavLink 
                        to="Formacion"
                        onClick={toggleHome}
                        >Presentacion</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink to="Formacion">Formacion</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink to="Conocimientos">Conocimientos</NavLink>
                    </NavItems>
                    <NavItems>
                        <NavLink to="Experiencia">Experiencia</NavLink>
                    </NavItems>
                </NavMenu>
            </NavContenedor>
        </Nav>
    </div>
  )
}

export default Navbar