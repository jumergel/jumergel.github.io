import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../shared-styling.css'; // Import shared styles

export default function About() {
  return (
    <div className="page-styling">
      <Container className="py-5">
        <h1 className="mb-4 text-center">About</h1>
          <p>I am an ambitious double major in mathematics and computer science at UT Austin. I seek out challenge and am open to a variety of opportunities. However, my career interests are primarily in actuarial science, statistics, and quantitative finance, but I am also very interested in machine learning, AI, and quantum physics and their future applications. </p>
          <p>Computer science is my passion and I am very excited to explore job possibilities in this field. I really enjoy it since it gives me a way to use my mathematical background to create something. I like the idea of being able of building something useful from nothing. Understanding the computer's architecture and how it all starts from on and off switches and becomes more complex has helped me further my understanding of computer science and is very fascinating to me.  </p>
          <p> I love life and constantly invest my time improving myself in various ways. However, I am ready to commit my time to a more serious life project and I would like to see the impact my work can make by working in industry.  </p>
      </Container>

      <Container className="py-5">
        <h1 className="mb-4 text-center">Interests</h1>
        <p> My favorite thing besides coding is surfing. It may seem very different - but both give me constant challenge and intense focus. Both require creativity of testing out new approaches and analyzing possible refinements in future attempts. The result of finishing a code, or catching a wave, give the same addictive satisfaction and feels meditative to me.  </p>         
        <p>I have been pursuing music and dance throughout my lifetime, through piano and ballet, and this has become a meaningful part of my life. For me it is not only a form of expression, but a way to connect with others.  </p> 
        <p> I have now found a similar enjoyment through starting this website and learning html, css, and javascript as a way to destress from rigorous classes such as Computer Architecture and Operating Systems. It's fun to have the flexibility to plan my own format, design, and content, through a more calm form of coding. I plan on making many additions and adding more complex features in the future! </p>           
        <p> I devote myself fully to everything I am a part of. In this way I can learn the most from every experience and gain valuable intangible skills such as working with a variety of people, tackling unique challenges, deepening my understanding of concepts, keeping my creativity active with a fresh perspective on the world. I am someone who can find a strong interest in any task or project and can communicate this motivation to others. Everyday, I make an effort to live the most honest and healthy life to maintain my passion for life and create positive impacts on others. </p>   
      </Container>

      <Container className="py-5">
        <h1 className="mb-4 text-center">Experience</h1>
        <p>Please see my resume: <a href="https://docs.google.com/document/d/1VrelxX6Bv1ghKwh_gz-P3fmNR4_bVHgjSQ2ZtdeBUjk/edit?usp=sharing" target="_blank">Resume</a></p>
        <p> Or access my academics webpage <a href="https://jumergel.github.io/academics" target="_blank">My Experiences</a></p>
      </Container>

      <Container className="py-5">
        <h1 className = "mb-4 text-center"> Languages</h1>
        <ul>
            <li>Java</li>
            <li>Python</li>
            <li>LaTeX</li>
            <li>HTML, CSS</li>
            <li>Assembly</li>
            <li>C, C++</li>
        </ul>
      </Container>

    </div>
  );
}