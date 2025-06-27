import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import '../shared-styling.css';

const datasets = [
  {
    id: 1,
    name: "Common Crawl",
    domain: "Text",
    size: "60TB+",
    creator: "Common Crawl Foundation",
    release_year: 2008,
    used_by_algorithms: ["GPT-3", "GPT-4"],
    license: "Public Domain",
    format: "WARC",
    access_url: "https://commoncrawl.org",
    tasks_enabled: ["Text Generation", "Summarization"]
  },
  {
    id: 2,
    name: "ImageNet",
    domain: "Vision",
    size: "14M images",
    creator: "Stanford",
    release_year: 2009,
    used_by_algorithms: ["ResNet", "YOLO", "ViT"],
    license: "Custom, Academic",
    format: "JPEG + JSON",
    access_url: "http://www.image-net.org",
    tasks_enabled: ["Object Detection", "Classification"]
  },
  {
    id: 3,
    name: "LAION-5B",
    domain: "Vision",
    size: "5B image-text pairs",
    creator: "LAION",
    release_year: 2022,
    used_by_algorithms: ["Stable Diffusion"],
    license: "CC-BY",
    format: "JSON + Parquet",
    access_url: "https://laion.ai",
    tasks_enabled: ["Text-to-Image Generation"]
  }
];

export default function Datasets() {
  return (
    <div className ="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Training Datasets</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {datasets.map(data => (
            <Col key={data.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    <a href={data.access_url} target="_blank" rel="noopener noreferrer">
                      {data.name}
                    </a>
                  </Card.Title>
                  <p><strong>Domain:</strong> {data.domain}</p>
                  <p><strong>Size:</strong> {data.size}</p>
                  <p><strong>Creator:</strong> {data.creator}</p>
                  <p><strong>Released:</strong> {data.release_year}</p>
                  <p><strong>Format:</strong> {data.format}</p>
                  <p><strong>License:</strong> {data.license}</p>

                  <p className="mt-2"><strong>Used By:</strong></p>
                  {data.used_by_algorithms.map((alg, idx) => (
                    <Badge key={idx} bg="secondary" className="me-1">{alg}</Badge>
                  ))}

                  <p className="mt-2"><strong>Tasks Enabled:</strong></p>
                  {data.tasks_enabled.map((task, idx) => (
                    <Badge key={idx} bg="info" className="me-1">{task}</Badge>
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
