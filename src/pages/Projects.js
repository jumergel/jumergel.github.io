import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import "../shared-styling.css";
import { Link } from "react-router-dom";

const projectData = [
  {
    title: "Toy Operating System",
    description:
      "Built a toy operating system, with many core features built from scratch.",
    tags: [
      "Operating Systems",
      "Multithreading",
      "Interrupts",
      "File systems",
      "Virtual Memory",
      "System Calls",
      "Preemptive Scheduling",
      "Semaphores",
      "x86-64",
    ],
    languageTags: ["C++", "C", "Assembly"],
    route: "/my-projects/toy-os",
  },
  {
    title: "Sprout System",
    description: "Procedural plant generation in WebGL.",
    tags: ["Graphics"],
    languageTags: ["WebGL"],
    route: "/my-projects/sprout-system",
  },
  {
    title: "NeuroDex",
    description: "Fullstack Website",
    tags: ["Software Engineering", "UI/UX", "AI"],
    languageTags: ["React Bootstrap", "Javascript", "MongoDB"],
    route: "/my-projects/neurodex",
  },
  {
    title: "Travel Diary",
    description: "AI integrated travel planner for large groups.",
    tags: ["Application Development", "AI"],
    languageTags: ["Swift"],
    route: "/my-projects/travel-diary",
  },
  {
    title: "Quiz Haven",
    description:
      "A personalized AI-centered study tool that adapts teaching to the user and delivers personalized quizzes.",
    tags: ["Application Development"],
    languageTags: ["Kotlin", "Android Studio"],
    route: "/my-projects/quiz-haven",
  },
  {
    title: "PV-FV Calculator",
    description:
      "A calculator for a variety of future value and present value calculations.",
    tags: ["Financial Analytics"],
    languageTags: ["Python", "Streamlit"],
    externalLink: "https://pvfvcalculator.streamlit.app/",
  },
];

export default function Projects() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">Projects</h1>

        <Row className="g-3">
          {projectData.map((item, idx) => {
            const Wrapper = item.externalLink ? "a" : Link;

            const wrapperProps = item.externalLink
              ? {
                  href: item.externalLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {
                  to: item.route,
                };

            return (
              <Col key={idx} xs={12}>
                <Wrapper
                  {...wrapperProps}
                  className="clickable-card"
                >
                  <Card className="rounded-card p-4">
                    <Card.Body className="d-flex flex-column justify-content-center">
                      <Card.Title>{item.title}</Card.Title>

                      <div className="mt-2">
                        <div className="project-card">
                          <Card.Text
                            style={{
                              paddingLeft: "25px",
                              paddingTop: "10px",
                            }}
                          >
                            {item.description}
                          </Card.Text>
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

                        {item.languageTags.map((tag, i) => (
                          <Badge
                            key={i}
                            className="me-2 language-tag"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Wrapper>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}