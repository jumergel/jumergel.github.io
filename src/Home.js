import { Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import img1 from './images/wakesurfing.jpg';         // replace with your image paths
import img2 from './images/time.jpg';
import img3 from './images/cs-building.jpg';
import './shared-styling.css';  // adjust path as needed


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Container fluid className="showcase-section basic">
    <Row className="g-0" >
      <Col md={4} className="d-flex justify-content-end showcase-card">
        <img src={img1} alt="About Me" className="showcase-img" style={{ marginLeft: '5vw' }} onClick={() => navigate('about')} />
        <div className="showcase-text">About<br />Me</div>
      </Col>
      <Col className="showcase-card">
        <img src={img2} alt="Academics" className="showcase-img"  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => navigate('academics')} />
      </Col>
      <Col className="showcase-card">
        <img src={img3} alt="My Projects" className="showcase-img" onClick={() => navigate('projects')}  />
        <div className="showcase-text" style={{marginTop: '72vh', marginLeft: '5vw'}}>My<br />Projects</div>
      </Col>
    </Row>
    

  </Container>

  <Container fluid className="contact-section basic" style={{ padding: '4rem 2rem', backgroundColor: '#1f2227', color: 'white' }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ textAlign: 'center' }}>
          <br /> <br /><br /> <br /> <br /><br />
          <div className="title-text">Contact</div>
          <p> Phone: 609-553-5319 <br />
          Work email: jm.mergel@gmail.com <br />
          School email: jmergel@utexas.edu </p>
        
   
  <div className="social-links">
    <a href="https://www.linkedin.com/in/juliamergel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/jumergel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://www.instagram.com/lysitsa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.youtube.com/watch?v=Qjk8iVr3QZ0&list=PLrhjlVPa_TboZsFVKOmCLWaiHHVZRgvOc" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <i className="fab fa-youtube"></i>
    </a>
  </div>
</Col>

        </Row>
      </Container>
    </>

  );
}
