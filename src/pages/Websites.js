import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';

const websites = [
  {
    "id": 1,
    "name": "Grammarly",
    "url": "https://www.grammarly.com",
    "description": "AI writing assistant for grammar and tone",
    "launched_date": "2015-10-01",
    "ml_algorithms_used": ["GPT-3", "BERT"],
    "category": "Writing, Productivity",
    "company": "Grammarly Inc.",
    "pricing_model": "Freemium",
    "tech_stack": ["React", "Flask", "AWS"],
    "active_users": "30 million+"
  },
  {
    "id": 2,
    "name": "ChatGPT",
    "url": "https://chat.openai.com",
    "description": "Conversational AI assistant",
    "launched_date": "2022-11-30",
    "ml_algorithms_used": ["GPT-3.5", "GPT-4"],
    "category": "Productivity, Education",
    "company": "OpenAI",
    "pricing_model": "Free, Subscription",
    "tech_stack": ["React", "FastAPI", "Azure"],
    "active_users": "180 million+"
  },
  {
    "id": 3,
    "name": "RunwayML",
    "url": "https://runwayml.com",
    "description": "Creative AI for video, image, and audio generation",
    "launched_date": "2018-06-01",
    "ml_algorithms_used": ["Stable Diffusion", "Gen-2"],
    "category": "Creativity, Media",
    "company": "Runway",
    "pricing_model": "Freemium",
    "tech_stack": ["Vue", "Node.js", "GCP"],
    "active_users": "Unknown"
  }
];

export default function Websites() {
  return (
    <div className ="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">AI Webpages</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {websites.map(site => (
            <Col key={site.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    <a href={site.url} target="_blank" rel="noopener noreferrer">
                      {site.name}
                    </a>
                  </Card.Title>
                  <Card.Text>{site.description}</Card.Text>

                  <p><strong>Launched:</strong> {site.launched_date}</p>
                  <p><strong>Company:</strong> {site.company}</p>
                  <p><strong>Users:</strong> {site.active_users}</p>

                  <p><strong>Algorithms:</strong></p>
                  {site.ml_algorithms_used.map((alg, idx) => (
                    <Badge key={idx} bg="secondary" className="me-1">{alg}</Badge>
                  ))}

                  <p className="mt-3"><strong>Tech Stack:</strong></p>
                  {site.tech_stack.map((tech, idx) => (
                    <Badge key={idx} bg="info" className="me-1">{tech}</Badge>
                  ))}

                  <p className="mt-3"><strong>Category:</strong> {site.category}</p>
                  <p><strong>Pricing:</strong> {site.pricing_model}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
