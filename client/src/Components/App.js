
import React from 'react';
import './App.css';
import{Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
//import {Routes,Route,Link} from "react-router-dom";
//import {Link} from "react-router-dom";
import {Main} from "./component/Main";
import StarList from "./component/StarList";
//import{Logout} from "./component/Logout";
function App() {
  
  return (
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#Main">Main</Nav.Link>
      <Nav.Link href="#StarList">StarList</Nav.Link>
      //<Nav.Link href="#Logout">Logout</Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown title="User Name">
      <NavDropdown.Item>Logout</NavDropdown.Item>
 </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
  </>
 </div>
  );
}

export default App;
