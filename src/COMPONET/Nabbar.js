import React from 'react'
import './nabbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/randa.logo.png'
import { HashLink } from 'react-router-hash-link';

const Nabbar = () => {
  return (
    <div className='nabvar'>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='renda'>
          <img src={logo} alt="" /> 
               Renda E-Commerc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',  }}
            navbarScroll
          >
            <HashLink style={{textDecoration:'none', padding:'10px',color:'black'}} to="/">Home</HashLink>
            <HashLink style={{textDecoration:'none', color:'black',padding:'10px'}} to="/shop">Shop</HashLink>
            <HashLink style={{textDecoration:'none', color:'black',padding:'10px'}} to="/about">About</HashLink>
            <HashLink style={{textDecoration:'none', color:'black',padding:'10px'}} to="/contact">Contact</HashLink>
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        

    </div>
  )
}

export default Nabbar