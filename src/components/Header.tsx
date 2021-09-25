import React from 'react'
import logo from '../DHBC.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { 
  Navbar,
  Nav,
  Container,
 } from 'react-bootstrap';

function Header(){
    return (<Navbar className="custom-header" fixed="top" variant="dark" >
    <Container>
      <Navbar.Brand ><img src={logo} className="dhbc-logo" alt="dhbc-logo" onClick={scroll.scrollToTop} /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            activeClass="active"
            to="juniors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Juniors
          </Link>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}

export default Header