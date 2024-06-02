import React, { useState } from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Approutes from "../utils/Approutes.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const router = createBrowserRouter(Approutes);
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid> 
        
          <Navbar.Brand href='#'>GUVI</Navbar.Brand>
          <img src='https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png'/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
             
            >
              <Nav.Link href="/">ALL</Nav.Link>
              <Nav.Link href="/fsd">FULL STACK DEVELOPMENT</Nav.Link>
              <Nav.Link href="/ds"> DATA SCIENCE</Nav.Link>
              <Nav.Link href="/cyber"> CYBER SECURITY</Nav.Link>
              <Nav.Link href="/career"> CAREER</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router}/>
    </>
  );
}

export default App

// https://www.guvi.in/courses/