import React, { useState, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const portfolioSectionRef = useRef(null);

  return (
    <Navbar color="light" light expand="lg" fixed="top" className="py-3" id="mainNav">
      <div className="container px-4 px-lg-5 d-flex justify-content-between align-items-center">
        <NavbarBrand tag={Link} to='/' style={{ fontFamily: 'Tilt Prism, sans-serif' }}>
          Don Lucho's Pollo a la Brasa
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ms-auto">
            <NavItem>
              <NavLink tag={Link} to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/services'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/' onClick={() => {
                if (portfolioSectionRef.current) {
                  portfolioSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/menu'>Menu</NavLink> 
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/contact'>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;