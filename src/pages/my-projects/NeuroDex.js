import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';

export default function NeuroDex() {
  return (
    <div className="page-styling">
    <BackButton />
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

