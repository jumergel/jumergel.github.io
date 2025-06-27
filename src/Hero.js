// The first half of Home Page, background image section - JM

import { Button } from 'react-bootstrap';
import './Hero.css';
import lavenderImg from './images/lavender-ai.jpg';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${lavenderImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0',
        textAlign: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* dark overlay box */}
      <div
        className="kenburns-top"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '40px 60px',
          borderRadius: '12px',
          display: 'inline-block',
        }}
      >
        <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '3rem' }}>
          NeuroDex
        </h1>
        <p style={{ color: 'white', fontSize: '1.25rem', marginBottom: '30px' }}>
          Making the most of AI.
        </p>

        {/* buttons */}
        <div>
          <Button
            variant="light"
            className="mx-2 px-4 py-2 fade-in slide-button"
            style={{ animationDelay: '0.1s' }}
            onClick={() => navigate('/pages/Websites')}
          >
            AI Webpages
          </Button>

          <Button
            variant="light"
            className="mx-2 px-4 py-2 fade-in slide-button"
            style={{ animationDelay: '0.5s' }}
            onClick={() => navigate('/pages/Algorithms')}
          >
            ML Models
          </Button>

          <Button
            variant="light"
            className="mx-2 px-4 py-2 fade-in slide-button"
            style={{ animationDelay: '0.9s' }}
            onClick={() => navigate('/pages/Datasets')}
          >
            Data Sets
          </Button>
        </div>
      </div>
    </div>
  );
}
