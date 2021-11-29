import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";

import BCIN_NA from './Components/bcin_na';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import fun_bcin_na from './Components/bcin_na';
// import DankMemes from "./Components/DankMemes";
// importComponents;

function App() {
  return (
    <Router>
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand to="/">FTB - Trend Graph</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.NavDropdown title="BCIN" id="collasible-nav-dropdown"> 
                <ReactBootStrap.NavDropdown.Item href="/bcin_na">NA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/#action/3.2">NNMi</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/#action/3.3">SEVONE</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/#action/3.3">SPLUNK</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="CES" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">NA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">NNMi</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SEVONE</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SPLUNK</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="CC" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">NA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">NNMi</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SEVONE</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SPLUNK</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="DC" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">NA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">NNMi</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SEVONE</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SPLUNK</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.NavDropdown title="UC" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">NA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">NNMi</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SEVONE</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">SPLUNK</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
      <Switch>
        <Route path='/bcin_na' component={BCIN_NA} />
      </Switch>
    </Router>
  );
}

export default App;

{/* <Route path='/' exact component={Home} /> */}

// import React from 'react';
// import './App.css';
// import * as ReactBootStrap from "react-bootstrap";
// import DankMemes from "./Components/DankMemes";

// import NavBar from "./Components/Navbar"
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {
//   return (
//     <div className="App">
//         <Router>
//         <NavBar />
 

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/dankmemes" component={DankMemes}>
//             <DankMemes />
//           </Route>
//         </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;
