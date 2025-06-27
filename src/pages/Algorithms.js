import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';


const algorithms = [
  {
    id: 1,
    name: "GPT-4",
    type: "Transformer",
    task: "Text Generation",
    developer: "OpenAI",
    release_date: "2023-03-14",
    trained_on: ["Common Crawl", "WebText2"],
    used_in_websites: ["ChatGPT", "Bing Chat"],
    performance_metrics: { F1: 0.91 },
    architecture: "Decoder-only Transformer",
    paper_url: "https://arxiv.org/abs/2303.08774",
    license: "Proprietary"
  },
  {
    id: 2,
    name: "BERT",
    type: "Transformer",
    task: "Text Understanding",
    developer: "Google",
    release_date: "2018-10-11",
    trained_on: ["Wikipedia", "BooksCorpus"],
    used_in_websites: ["Grammarly"],
    performance_metrics: { F1: 0.88 },
    architecture: "Encoder-only Transformer",
    paper_url: "https://arxiv.org/abs/1810.04805",
    license: "Open Source"
  },
  {
    id: 3,
    name: "Stable Diffusion",
    type: "Diffusion",
    task: "Image Generation",
    developer: "Stability AI",
    release_date: "2022-08-22",
    trained_on: ["LAION-5B"],
    used_in_websites: ["RunwayML", "NightCafe"],
    performance_metrics: { FID: 6.5 },
    architecture: "Latent Diffusion",
    paper_url: "https://arxiv.org/abs/2112.10752",
    license: "Open Source"
  }
];

export default function Algorithms() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Machine Learning Algorithms</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {algorithms.map(alg => (
            <Col key={alg.id}>
              <Card className="default-card">
                <Card.Body>
                  <Card.Title>
                    <a href={alg.paper_url} target="_blank" rel="noopener noreferrer">
                      {alg.name}
                    </a>
                  </Card.Title>
                  <p><strong>Type:</strong> {alg.type}</p>
                  <p><strong>Task:</strong> {alg.task}</p>
                  <p><strong>Developer:</strong> {alg.developer}</p>
                  <p><strong>Released:</strong> {alg.release_date}</p>
                  <p><strong>Architecture:</strong> {alg.architecture}</p>
                  <p><strong>License:</strong> {alg.license}</p>
                  <p><strong>Performance:</strong> {Object.entries(alg.performance_metrics).map(([metric, val]) => `${metric}: ${val}`).join(', ')}</p>

                  <p className="mt-2"><strong>Trained On:</strong></p>
                  {alg.trained_on.map((dataset, idx) => (
                    <Badge key={idx} bg="info" className="me-1">{dataset}</Badge>
                  ))}

                  <p className="mt-2"><strong>Used In:</strong></p>
                  {alg.used_in_websites.map((site, idx) => (
                    <Badge key={idx} bg="secondary" className="me-1">{site}</Badge>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
