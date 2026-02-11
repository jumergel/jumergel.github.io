import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';
import { useNavigate } from 'react-router-dom';

const projectData = [
  {
    title: "NeuroDex",
    description: "Fullstack Website",
    tags: ["Software Engineering", "UI/UX", "AI"]
  },
  {
    title: "Travel Diary",
    description:"AI integrated travel planner for large groups.",
    tags: ["Application Development", "Swift", "AI"]
  },
  {
    title: "Quiz Haven",
    description:"A personalized AI-centered study tool that adapts teaching to the user and delivers personalized quizzes.",
    tags: ["Application Development", "Kotlin", "Android Studio"]
  },
  {
    title: "Toy Operating System",
    description:"Built a toy operating system, with many core features built from scratch.",
    tags: ["Operating Systems", "Multithreading", "C++", "C", "Assembly", "x86-64", "Interrupts", "File systems", "Virtual Memory", "System Calls", "Preemptive Scheduling", "Semaphores"]
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Projects</h1>
        <Row className="g-3">
          {projectData.map((item, idx) => (
            <Col key={idx} xs={12}>

              <Card className="rounded-card p-4"  onClick={() => navigate('/my-projects/NeuroDex')}> 
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title>{item.title}</Card.Title>
                  <div className="mt-2">
                  <div className = "project-card">
                  <Card.Text style={{ paddingLeft: "25px", paddingTop: "10px" }}>{item.description}</Card.Text>
                  </div>
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

