import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {FaArrowRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';




const Shop_nav = () => {
  return (
    
    <Navbar className="bg-body-tertiary">
    <Container>
    <Navbar.Collapse >
    <p className='pp2'> {<FaArrowRight/>}</p>    
      <Navbar.Brand href="/boyes">
        <button type="button" class="btn btn-success">
        Boyes product
        </button>
      </Navbar.Brand>
      </Navbar.Collapse>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <p className='pp2'> {<FaArrowRight/>}</p>
      <Navbar.Brand href="/girls">
        <button type="button" class="btn btn-success">
        Girls product
        </button>
      </Navbar.Brand>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Shop_nav



    