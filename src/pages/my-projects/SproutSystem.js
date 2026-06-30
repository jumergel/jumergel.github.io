import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BackButton from '../../components/BackButton';

export default function SproutSystem() {
    const navigate = useNavigate();
    const [demoSrc, setDemoSrc] = useState(
        "https://sprout-system-0b9c58.gitlab.io/"
      );

    
  const handleBack = () => {
    setDemoSrc("about:blank");
    setTimeout(() => navigate(-1), 10);
  };

        return (
            <div className="page-styling">
                <button
        className="arrow-btn"
        onClick={() => navigate(-1)}
        style={{
            margin: '1.5rem',
            top: '1rem',
            left: '1rem',
            zIndex: 999999,
        }}
        >
        ‹
        </button>


      <Container className="py-5">
        <h1 className="mb-4 text-center">Sprout System</h1>

        { /* DEMO*/ }
        <div
        style={{
            width: "900px",
            height: "530px",
            overflow: "hidden",
            borderRadius: "12px",
            margin: "2rem auto", // centers it
        }}
        >
        <iframe
            src="https://sprout-system-0b9c58.gitlab.io/"
            title="Sprout System Demo"
            scrolling="no"
            style={{
            width: "1400px",
            height: "1000px",
            border: "none",
            transform: "scale(0.6)",
            transformOrigin: "top left",
            }}
        />
        </div>

        { /* SLIDES */ }
        <div style={{ 
            borderRadius: '24px', 
            overflow: 'hidden',
            width: '68.6%',        /* reduce width */
            margin: '4rem auto 0'  /* centers it + adds top spacing */
            }}>
            <iframe
                src="https://www.canva.com/design/DAHHvQS8J_M/6086KX1L-KoQSwScLjRULA/view"
                width="100%"
                height="500"
                allowFullScreen
                style={{ display: 'block' }}
            />
            </div>
        
      </Container>
    </div>
  );
}

