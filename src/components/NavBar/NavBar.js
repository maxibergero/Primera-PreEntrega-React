
import React from "react"
import './NavBar.css'




import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'

import CartWidget from "../CartWidget/CartWidget";


const NavBar = (props) => {
  return (
    <>
    
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1 className='titulo'>{props.titulo}</h1>
        <Nav className="me-auto">
          <Nav.Link className='productos' href="#home">Productos</Nav.Link>
          <Nav.Link className='ofertas' href="#features">Ofertas!!!</Nav.Link>
          <Nav.Link className='favoritos' href="#pricing">Favoritos</Nav.Link>
          
        </Nav>
        <CartWidget cantidad='0'/>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar