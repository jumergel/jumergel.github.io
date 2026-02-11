// App.js
import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.js';
import Home from './Home.js';
import Projects from './pages/Projects.js';
import Academics from './pages/Academics.js';
import Webmap from './pages/Webmap.js';
import About from './pages/About.js';
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
      style={{ width: '30px', marginLeft: '1vw' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

function App() {
  // Controls About dropdown so it doesn't "stick" open after navigation
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Router>
      <div className="App basic">
        {/* Nav bar */}
        <Navbar className="custom-navbar" style={{ backgroundColor: '#97b1d1' }}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <HoverHome />
            </Navbar.Brand>

            <Nav className="me-auto">
              {/* About dropdown: hover opens, wrapper prevents flicker when moving to menu */}
              <Nav.Item>
                <div
                  className = "dropdown-reserve"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  <NavDropdown
                    id="nav-about"
                    className="rounded-dropdown"
                    show={aboutOpen}
                    title={
                      <Link
                        to="/about"
                        className="hover-pill"
                        onClick={() => setAboutOpen(false)}
                      >
                        About
                      </Link>
                    }
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/academics"
                      onClick={() => setAboutOpen(false)}
                    >
                      Academics
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/projects"
                      onClick={() => setAboutOpen(false)}
                    >
                      Projects
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={Link}
                      to="/interests"
                      onClick={() => setAboutOpen(false)}
                    >
                      Interests
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/webmap" className="hover-pill">
                  Web Map
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/webmap" element={<Webmap />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
