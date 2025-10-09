import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';

const academicData = [
  {
    title: "Differential Geometry Research",
    tags: ["Rising Researcher's Award", "Research", "Mathematics"]
  },
  {
    title: "Operating Systems Overview",
    tags: ["Class Overview", "Computer Science"]
  },
  {
    title: "Operating Systems CSB Honors Teaching Assistant",
    tags: ["Work Experience", "Operating Systems", "Programming", "Presenting"]
  },
  {
    title: "1st Place Mercer Case Competition",
    tags: ["Competition", "Mathematics", "Actuarial Science", "Business"]
  },
  {
    title: "Women in Stem Mentor",
    tags: ["Work Experience", "Mathematics", "Leadership", "Community"]
  },
  {
    title: "Gamma Iota Sigma - Marketing Director",
    tags: ["Actuarial Science", "Mathematics", "Leadership", "Community"]
  }
];

export default function Academics() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Academic Achievements</h1>
        <Row className="g-3">
          {academicData.map((item, idx) => (
            <Col key={idx} xs={12}>
              <Card className="flex-row align-items-center p-3">
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
