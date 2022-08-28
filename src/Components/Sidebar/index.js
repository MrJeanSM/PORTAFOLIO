import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    NavMenu,
    NavItems,
    NavLink
} from './SidebarElements.js'

const Sidebar = ({ isOpen,toggle }) => {
  return (
    <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <NavMenu>
                <NavItems>
                    <NavLink to="Presentacion" onClick={toggle} >Presentacion</NavLink>
                    <NavLink to="Formacion" onClick={toggle}>Formacion</NavLink>
                    <NavLink to="Conocimientos" onClick={toggle}>Conocimientos</NavLink>
                    <NavLink to="Experiencia" onClick={toggle}>Experiencia</NavLink>
                </NavItems>
            </NavMenu>
        </SidebarContainer>
    </div>
  )
}

export default Sidebar