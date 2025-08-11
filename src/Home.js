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
  );
}
