import { Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import heroImg from './images/bird.avif';
import portrait from './images/portrait.png';
import { useNavigate } from 'react-router-dom';
import './shared-styling.css'; 
import DecryptedText from './components/DecryptedText'; 


export default function Hero() {
  const navigate = useNavigate();

  return (
    <div 
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        minHeight: '93vh',
        padding: '0px',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
      }}
    >
      {/* Row container for left + right */}
    
        {/* Left: Overlay box */}
      <Container fluid >
        <Row>
          <Col className="hero-styling d-flex flex-column justify-content-center basic ">   
          <h1 style={{ fontWeight: 'bold' }} className="align-items-end">
          <DecryptedText
            text={'Julia Mergel.'}
            animateOn="view"
            sequential
            revealDirection="start"
            speed={50}
            className="title-revealed"
            encryptedClassName="title-encrypted"
          />
          
          </h1>
          <p style={{ marginBottom: '30px' }}>
            Mathematics &amp; Computer Science<br />
            Double Major at UT Austin.
            </p>
          </Col>
          <Col>
            {/* Right: Portrait image */}
            <div style={{ flexShrink: 0 }} className="hero-img-container">
              <img
                src={portrait}
                alt="Portrait"
                className="hero-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
