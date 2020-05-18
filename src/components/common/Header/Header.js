import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header className="site-header">
      <Navbar bg="warning" expand="sm" variant="light">
        <div className="container">
          <Logo></Logo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Menu></Menu>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};
export default Header;
