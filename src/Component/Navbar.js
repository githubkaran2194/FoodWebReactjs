import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CustomNavbar = () => {
  return (
    <Container>

    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#" className='text-danger'>Foodie</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
          <Link to="/" className='link'>
            Home
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to="/about" className='link'>
      About
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to="/contact" className='link'>
            Contact
          </Link>
       </Nav.Link>
          <Nav.Link>
          <Link to="/cart" className='link'>
Cart
<i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/login" className="link">
          Login
          <i class="fa-solid fa-user"></i>
          </Link>
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>

  );
};

export default CustomNavbar;
