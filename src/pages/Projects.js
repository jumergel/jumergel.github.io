import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';
import { useNavigate } from 'react-router-dom';


export default function Projects() {
  //const navigate = useNavigate();

  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">My Projects</h1>
      </Container>
    </div>
  );
}
