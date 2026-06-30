import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

export default function TravelDiary() {
    const navigate = useNavigate();

  return (
    <div className="page-styling">
    <BackButton />
      <Container className="py-5">
        <h1 className="mb-4 text-center">Travel Diary</h1>

        { /* DEMO VIDEO */ }
        {/* /* <div style={{ 
            borderRadius: '24px', 
            overflow: 'hidden',
            width: '68.6%',        
            // margin: '4rem auto 0'  /* centers it + adds top spacing */
            // }}>
            // <iframe
            //     src=""
            //     width="100%"
            //     height="500"
           
            //     allowFullScreen
            //     style={{ display: 'block' }}
            // />
            // </div> */}}
        }
        <div
            style={{
                width: '15.6%',
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
            <source src="/videos/traveldiary480.mov" type="video/mp4" />
        </video>
        </div>


        { /* SLIDES */ }
        <div style={{ 
            borderRadius: '24px', 
            overflow: 'hidden',
            width: '68.6%',        /* reduce width */
            margin: '4rem auto 0'  /* centers it + adds top spacing */
            }}>
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQzlDn0BY9YRwUQg7FYlkmVgubxnQdC3sQbcWA2owvLNP1dNw38q3AA069jpNQV6RrOIKgFnotUskdo/pub?start=false&loop=true&delayms=5000"
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

