import { Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import img1 from './images/wakesurfing.jpg';         // replace with your image paths
import img2 from './images/time.jpg';
import img3 from './images/cs-building.jpg';
import neurodexphoto from './images/lavender_ai_photo.avif';
import traveldiaryphoto from './images/previewimage_traveldiary.png';
import pasteltree from './images/pastel_tree.jpg';
import './shared-styling.css';  // adjust path as needed
import ProjectCarousel from "./ProjectCarousel";


export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Container fluid className="showcase-section basic">
    <Row className="g-0" >
      <Col md={4} className="d-flex justify-content-end showcase-card">
        <img src={img1} alt="About Me" className="showcase-img" style={{ marginLeft: '5vw' }} onClick={() => { navigate('/about');}} />
        <div className="showcase-text">About<br />Me</div>
      </Col>
      <Col className="showcase-card">
        <img src={img2} alt="My Projects" className="showcase-img"  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} onClick={() => navigate('/projects')} />
      </Col>
      <Col className="showcase-card">
        <img src={img3} alt="My Academics" className="showcase-img" onClick={() => navigate('/academics')}  />
        <div className="showcase-text" style={{marginTop: '72vh', marginLeft: '1vw'}}>My<br />Academics</div>
      </Col>
    </Row>
    

  </Container>

  <Container fluid className="contact-section basic" style={{ padding: '4rem 2rem', backgroundColor: '#1f2227', color: 'white' }}>
        <Row>
  
        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: 'center' }}>
        <div className="title-text" style= {{textAlign: 'left', paddingTop: '20vh'}}>My Projects</div>
          <ProjectCarousel
            slides={[
              { id:"Neurodex",
                imageUrl: neurodexphoto,
                title:"neurodex",
                description:"An AI-powered fullstack website that helps people find and explore AI tools by showing what models and data they use.",
                techLine:"React, Flask, MongoDB, Python, HTML/CSS, Postman, GCP, BeautifulSoup" },
              { id:"TravelDiary", 
                description: "A collaborative ios mobile app for friends to document and plan trips together by generating personalized itineraries powered by AI",
                techLine:"Swift, Figma, XCode, ChatGPT API, Firebase",
                imageUrl: traveldiaryphoto, 
                title:"travel diary" },
                {id: "SeeMore",
                description:"see more coming soon ...",
                imageUrl: pasteltree
                }
            ]}
          />
          <br /><br /><br />
     
        </Col>

          {/* <Col md={{ span: 6, offset: 3 }} style={{ textAlign: 'center' }}>
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
</Col> */}

        </Row>
      </Container>
    </>

  );
}
