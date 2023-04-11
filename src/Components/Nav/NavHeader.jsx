import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './NavHeader.css';


const NavHeader = () => {
  return (
    <div>
       <Navbar className='bg-secondary rounded mt-4 .text-white  ' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">  <h1 className='title-color'> Jobs Area</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          
            <div className='title-nav'>

              <Link className='t' to="/">Home</Link>
              <Link className='t'  to="/Statistics">Statistics</Link>
              
              <Link className='t'  to="/AppliedJobs">AppliedJobs</Link>
              <Link className='t'  to="/Blog">Blog</Link>
             
            </div>
            <Button variant="light">Start Applying</Button>{' '}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    
  );
};

export default NavHeader;