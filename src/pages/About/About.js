import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GitLabRepoStats from './GitLabRepoStats';
import '../../shared-styling.css'; // Import shared styles

const teamMembers = [
  {
    name: 'Julia Mergel',
    username: 'jm.mergel',
    img: 'images/squareportrait.jpg',
    bio: 'Frontend developer who loves React.',
    resp: 'Frontend UI and accessibility',
  },
  {
    name: 'Abha Misaqi',
    username: 'abhamisaqi',
    img: 'images/abhamisaqi.jpg',
    bio: 'Backend specialist and API architect.',
    resp: 'API and backend integration',
  },
  {
    name: 'Noah Aguillon',
    username: 'Scylthren',
    img: 'images/IMG_2963.jpg',
    bio: 'DevOps and full-stack engineer.',
    resp: 'DevOps, full stack development',
  },
  {
    name: 'David Liu',
    username: 'DavidLiu2',
    img: 'images/image0.jpg',
    bio: 'DevOps enthusiast and front-end expert.',
    resp: 'API and database design. Front-end.',
  },
  {
    name: 'Matthew Little',
    username: 'matthewlittle3.14159',
    img: 'images/profile.jpg',
    bio: 'Senior CS major at UT Austin',
    resp: 'Front-end',
  },
];

function About() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Meet Our Team</h2>
      <Row>
        {teamMembers.map((member, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={member.img} alt={`${member.name}'s photo`} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.bio}</Card.Text>
                <Card.Text>
                  <strong>Responsibilities:</strong> {member.resp || 'N/A'}
                </Card.Text>
                <GitLabRepoStats username={member.username} authorName={member.name} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;