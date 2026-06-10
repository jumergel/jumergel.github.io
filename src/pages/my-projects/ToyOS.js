import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../../shared-styling.css';
import { useNavigate } from 'react-router-dom';

export default function ToyOS() {
    const navigate = useNavigate();

  return (
    <div className="page-styling">
        <button className="arrow-btn" onClick={() => navigate(-1)} style={{ margin: '1.5rem' }}>
        ‹
        </button>
      <Container className="py-5">
        <h1 className="mb-4 text-center">Toy Operating System</h1>
        <p>
            Please contact me at jm.mergel@gmail.com for access to the private repository.
        </p>

        <p>
            I designed and programmed the following pieces of the operating system:
        </p>

        <ul>
            <li>Critical Sections</li>
            <li>Thread scheduling and synchronization</li>
            <li>Interrupt Handling</li>
            <li>File system reading</li>
            <li>Virtual memory manager</li>
            <li>Page fault handling</li>
            <li>System calls (write, exit, shutdown, fork, exec)</li>
        </ul>
      </Container>
    </div>
  );
}

