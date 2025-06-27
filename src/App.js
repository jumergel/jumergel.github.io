import './App.css';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.js';
import Home from './Home.js';
import Websites from './pages/Websites';
import Algorithms from './pages/Algorithms';
import Datasets from './pages/Datasets';
import About from './pages/About/About.js'
import homeButton from './images/white-transparent.png';
import homeButtonAnimated from './images/white-animated-home.gif';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HoverHome() {
  const [isHovered, setIsHovered] = useState(false);


 return (
   <img
     src={isHovered ? homeButtonAnimated : homeButton}
     alt="Home"
     style={{ width: '30px', marginLeft: '1vw', }}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
   />
 )}


function App() {
 return (
   <Router>
     <div className ="App">
       {/* Nav bar */}
       <Navbar className="custom-navbar" style={{ backgroundColor: '#282c34' }}>
         <Container fluid>
           <Navbar.Brand as={Link} to="/">
             <HoverHome />
           </Navbar.Brand>
           <Nav className="me-auto">
           {/* <Nav.Link as={Link} to="/"><HoverHome /></Nav.Link> */}
           <Nav.Link as={Link} to="/about">About</Nav.Link>
           <Nav.Link as={Link} to="/pages/Websites">AI Webpages</Nav.Link>
           <Nav.Link as={Link} to="/pages/Algorithms">ML Models</Nav.Link>
           <Nav.Link as={Link} to="/pages/Datasets">Data Sets</Nav.Link>
           </Nav>
         </Container>
       </Navbar>


       <Routes>
         <Route path="/" element={
           <>
             <Hero />
             <Home />
           </>
         } />
         <Route path="/about" element={<About />} />
         <Route path="/pages/Websites" element={<Websites />} />
         <Route path="/pages/Algorithms" element={<Algorithms />} />
          <Route path="/pages/Datasets" element={<Datasets />} />
       </Routes>
     </div>
   </Router>
 );
}

export default App;
