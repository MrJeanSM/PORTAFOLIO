import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    position: fixed;
    background-color: black;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavContenedor = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const Imagen = styled.img`
    position: absolute;
    border-radius: 10px;
    margin: 10px;
    width: 60px;
    max-width: 60px;
    height: 60px;
    left: 40px;
    z-index: 99;
    cursor: pointer;
`

export const Icon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItems = styled.li`
    height: 80px;

`

export const NavLink = styled(LinkS)`
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`