import { Container } from 'react-bootstrap';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container fluid className="intro-screen">
      <h1> Our Goal </h1>
      <p>
        NeuroDex is a web application designed to help you understand AI better.
        Ever found yourself looking for the right AI tool for your project or data set and were unable to do so?
      </p>
      <h1> Our Platform </h1>
      <p>
        Is made so that you can find the right Artificial Intelligence for your needs, easily.
      </p>
    </Container>
  );
}
