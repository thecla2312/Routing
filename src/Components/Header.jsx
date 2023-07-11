import React from 'react'
// about home
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = () => {
  return <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='fs-4 fw-bold'>
        <Link to='/ Homepage' className='text-decoration-none text-success'>The Meal DB</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to='/' className='text-decoration-none text-success fs-5 fw-lighter'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to='/about'
                className='text-decoration-none text-success fs-5 fw-lighter'
              >
                About
              </Link>
            </Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
   
  </div>
  
};

export default Header;