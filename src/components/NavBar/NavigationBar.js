import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import './NavigationBar.css';
const NavigationBar = () => {
    return (
      <Navbar className="fixed-top" style={{backgroundColor: "#222729", borderBottom: "1px solid #ff99337c"}} expand="lg">
      <Container>
        <Navbar.Brand><a href="https://alamgir-hossain.uiuxit.com" className="text-light">Ala<font style={{color: "#ff9933", fontSize:"30px"}}>M</font>giR</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu-list">
            <Nav.Link href="https://alamgir-hossain.uiuxit.com">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#skillBar">My Skills</Nav.Link>
            <Nav.Link href="#myService">Services</Nav.Link>
            <Nav.Link href="#myProject">My Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationBar;