import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';
import { useNavigate, Link } from 'react-router-dom';

const interestData = [
  {
    title: "Music",
    tags: ["Piano", "Violin", "Classical"],
    link: "piano"
  },
  {
    title: "Reading",
    tags: ["Pyschological", "Philosophical", "Classics", "Nonfiction"],
    link: "reading"
  },
  {
    title: "Movies",
    tags: ["Sci-fi", "Psychological Thrillers", "Classics", "Foreign Films", "Drama", "Comedy"],
    link: "movies"
  }
  
];

export default function Interests() {
  const navigate = useNavigate();

  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Interests</h1>
        <Row className="g-3">
          {interestData.map((item, idx) => (
            <Col key={idx} xs={12}>
                <Link to={`/interests/${item.link}`} className="clickable-card">
                    <Card className="rounded-card p-4" > 
                        <Card.Body className="d-flex flex-column justify-content-center">
                        <Card.Title>{item.title}</Card.Title>
                        <div className="mt-2">
                    
                            {item.tags.map((tag, i) => (
                            <Badge 
                                key={i} 
                                bg="secondary" 
                                className="me-2"
                            >
                                {tag}
                            </Badge>
                            ))}
                        </div>
                        </Card.Body>
                    </Card>
                 </Link>
                 
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

