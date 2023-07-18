import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="lg" fixed="top" className="py-3" id="mainNav">
      <div className="container px-4 px-lg-5 d-flex justify-content-between align-items-center">
        <NavbarBrand href="#page-top" style={{ fontFamily: 'Tilt Prism, sans-serif' }}>
          Don Lucho's Pollo a la Brasa
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;