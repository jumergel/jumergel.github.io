import './App.css';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.js';
import Home from './Home.js';
import Projects from './pages/Projects.js';
import Academics from './pages/Academics.js';
import Webmap from './pages/Webmap.js';
import About from './pages/About/About.js'
import homeButton from './images/white-transparent.png';
import homeButtonAnimated from './images/dark-home-animated.gif';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './shared-styling.css'; 
import Footer from './Footer';

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
     <div className ="App basic">
       {/* Nav bar */}
       <Navbar className="custom-navbar" style={{ backgroundColor: '#97b1d1' }}>
         <Container fluid>
           <Navbar.Brand as={Link} to="/">
             <HoverHome />
           </Navbar.Brand>
           <Nav className="me-auto">
           {/* <Nav.Link as={Link} to="/"><HoverHome /></Nav.Link> */}
           <Nav.Link as={Link} to="/about">About</Nav.Link>
           <Nav.Link as={Link} to="/pages/Projects">My Projects</Nav.Link>
           <Nav.Link as={Link} to="/pages/Academics">Academics</Nav.Link>
           <Nav.Link as={Link} to="/pages/Webmap">Webmap</Nav.Link>
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
         <Route path="/about" element={<About/>} />
         <Route path="/pages/Projects" element={<Projects/>} />
         <Route path="/pages/Academics" element={<Academics/>} />
          <Route path="/pages/Webmap" element={<Webmap/>} />
       </Routes>
       <Footer />
     </div>
   </Router>
 );
}

export default App;
