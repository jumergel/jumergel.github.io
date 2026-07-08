// App.js
import './App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.js';
import Home from './Home.js';
import Projects from './pages/Projects.js';
import Interests from './pages/Interests.js';
import Academics from './pages/Academics.js';
import Webmap from './pages/Webmap.js';
import About from './pages/About.js';
import Piano from './pages/my-interests/Piano.js';
import Reading from './pages/my-interests/Reading.js';
import Movies from './pages/my-interests/Movies.js';
import GraphicDesign from './pages/my-interests/GraphicDesign.js';
import NeuroDex from './pages/my-projects/NeuroDex.js';
import QuizHaven from './pages/my-projects/QuizHaven.js';
import SproutSystem from './pages/my-projects/SproutSystem.js';
import ToyOS from './pages/my-projects/ToyOS.js';
import TravelDiary from './pages/my-projects/TravelDiary.js';
import MercerCaseCompetition from './pages/academics/MercerCaseCompetition';
import DifferentialGeometry from './pages/academics/DifferentialGeometry';

import homeButton from './images/white-transparent.png';
import homeButtonAnimated from './images/dark-home-animated.gif';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './shared-styling.css';
import Footer from './Footer';
import ScrollToTop from "./components/ScrollToTop";


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
      <ScrollToTop /> 
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
          <Route path="/interests" element={<Interests />} />
          <Route path="/interests/piano" element={<Piano />} />
          <Route path="/interests/reading" element={<Reading />} />
          <Route path="/interests/movies" element={<Movies />} />
          <Route path="/interests/graphic-design" element={<GraphicDesign />} />
          

          {/* /* PROJECT ROUTES */ }
          <Route path="/my-projects/neurodex" element={<NeuroDex />} />
          <Route path="/my-projects/quiz-haven" element={<QuizHaven />} />
          <Route path="/my-projects/sprout-system" element={<SproutSystem />} />
          <Route path="/my-projects/toy-os" element={<ToyOS />} />
          <Route path="/my-projects/travel-diary" element={<TravelDiary />} />

          {/* /* ACADEMIC ROUTES */ }
          <Route path="/academics/mercer-case-competition" element={<MercerCaseCompetition />} />
          <Route path="/academics/differential-geometry" element={<DifferentialGeometry />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
