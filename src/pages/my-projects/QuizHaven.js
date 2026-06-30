import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import BackButton from '../../components/BackButton';

export default function QuizHaven() {
  return (
    <div className="page-styling">
           <BackButton />
      <Container className="py-5">
        <h1 className="mb-4 text-center">QuizHaven</h1>
      </Container>
    </div>
  );
}

