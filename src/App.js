import './App.css';
import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
import SproutSystemNotes from './pages/notes/SproutSystemNotes';

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

function NavIcon({ href, label, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#3a3a3a' : 'white',
        transition: 'color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        padding: '0.25rem',
      }}
    >
      {icon}
    </a>
  );
}

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="App basic">
        <Navbar className="custom-navbar" style={{ backgroundColor: '#97b1d1' }}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <HoverHome />
            </Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Item>
                <div
                  className="dropdown-reserve"
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

            {/* RIGHT SIDE ICONS */}
            <Nav className="ms-auto me-2" style={{ alignItems: 'center', gap: '0.75rem' }}>
              <NavIcon
                href="https://www.linkedin.com/in/juliamergel/"
                label="LinkedIn"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
              />
              <NavIcon
                href="mailto:jmergel@utexas.edu"
                label="Email"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                }
              />
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

          {/* PROJECT ROUTES */}
          <Route path="/my-projects/neurodex" element={<NeuroDex />} />
          <Route path="/my-projects/quiz-haven" element={<QuizHaven />} />
          <Route path="/my-projects/sprout-system" element={<SproutSystem />} />
          <Route path="/my-projects/toy-os" element={<ToyOS />} />
          <Route path="/my-projects/travel-diary" element={<TravelDiary />} />

          {/* ACADEMIC ROUTES */}
          <Route path="/academics/mercer-case-competition" element={<MercerCaseCompetition />} />
          <Route path="/academics/differential-geometry" element={<DifferentialGeometry />} />

          {/* NOTES ROUTES */}
          <Route path="/notes/sprout-system" element={<SproutSystemNotes />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;