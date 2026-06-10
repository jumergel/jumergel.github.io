import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import { useNavigate } from 'react-router-dom';

export default function NeuroDex() {
  const navigate = useNavigate();

  return (
    <div className="page-styling">
      <button className="arrow-btn" onClick={() => navigate(-1)} style={{ margin: '1.5rem' }}>
        ‹
      </button>
      <Container className="py-5">
        <h1 className="mb-4 text-center">NeuroDex</h1>

        <div
            style={{
                width: '75%',
                margin: '4rem auto 0',
                borderRadius: '24px',
                overflow: 'hidden'
            }}
            >
            <video
                controls
                preload="metadata"
                playsInline
                style={{
                width: '100%',
                height: 'auto',
                display: 'block'
                }}
            >
            <source src="/videos/AIWebsiteDemo.webm.mp4" type="video/mp4" />
        </video>
        </div>
        
      </Container>
    </div>
  );
}

